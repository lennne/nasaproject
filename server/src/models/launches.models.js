const launches = new Map();

let launchNumber = 100;

const launch = {
  flightNumber:100,
  mission: 'Kepler Exploration X',
  rocket: 'Explorer IS1',
  launchDate: new Date('December 27, 2030'),
  target: 'Kepler-442 b',
  //We need a way of differentiating between upcoming and historical launches`  
  //successfull missions
  success: true,
  upcoming: true,
  customer: ['ZTM', 'NASA'],
};

launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

function getAllLaunches(){
    return Array.from(launches.values())
}

function addNewLaunch(newLaunch){
    launchNumber++;
    launches.set(launchNumber, Object.assign(newLaunch, {
        success:true,
        upcoming: true,
        customers: ['Zero To Mastery', 'NASA'],
        flightNumber: launchNumber
    })
);
    return launches;
}

function abortLaunchById(launchId){
    const aborted = launches.get(launchId)
    aborted.upcoming = false;
    aborted.success = false;

    return aborted;
}

module.exports = {
    getAllLaunches,
    addNewLaunch,
    abortLaunchById,
    existsLaunchWithId
};