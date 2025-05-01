const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');



function isHabitablePlanet(planet){
    return planet['koi_disposition'] === 'CONFIRMED' 
    && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
    &&planet['koi_prad'] < 1.6; 
}

const habitablePlanets = [];

function loadPlanetsData(){
    return new Promise((resolve, reject) => {
    
    fs.createReadStream(path.join(__dirname, '..','..','data','cumulative_2025.04.24_17.17.42.csv'))
    .pipe(parse({
        comment: '#',
        columns: true,

    }))
    .on('data', (data) => {
        if(isHabitablePlanet(data))
        {
            habitablePlanets.push(data);
        }
    })
    .on('error', (err) => {
        console.log(err);
        reject();
    })
    .on('end', () => {
        //when we print our results we see a bizzare text and in here what we see is node representing our data as collection of bytes
        //this is because the readstream is just reading our data in raw bits and bytes
        console.log(`${habitablePlanets.length} earth like planets we've found`);
        console.log('done');
        resolve();
    });
    })
 }

module.exports = {
    loadPlanetsData,
    planets: habitablePlanets
};