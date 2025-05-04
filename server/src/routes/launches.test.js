const request = require('supertest');
const app = require('../app');


describe('GET /launch', () => {
    test('It should respond with 200 ', async () => {
    const response = await request(app)
                        .get('/launch') 
                        .expect('Content-Type', /json/)
                        .expect(200);
                    
                    })

});

describe('POST /launch', () => {
    const launchData = {
        mission: "ZTM15S",
        rocket: "ZTM EXPERIMENTAL IS1",
        target: "Kepler-186 f",
        launchDate: "January 17, 2030"     
    }

    const launchDataInvalidDate = {
        mission: "ZTM15S",
        rocket: "ZTM EXPERIMENTAL IS1",
        target: "Kepler-186 f",
        launchDate: "hello"     
    }

    const launchDataWithoutDate = {
        mission: "ZTM15S",
        rocket: "ZTM EXPERIMENTAL IS1",
        target: "Kepler-186 f",
    }


    test('It should responde with 201 created', async () => {

    //testing a post request
    const response = await request(app)
                            .post('/launch')
                            .send(launchData)
                            .expect('Content-Type', /json/)
                            .expect(201);

    const requestDate = new Date(launchData.launchDate).valueOf();
    const responseDate = new Date(response.body.launchDate).valueOf();

    expect(requestDate).toBe(responseDate);
    expect(response.body).toMatchObject(launchDataWithoutDate)
    })
    test('It should catch missing requirements', async () => {
                     //testing a post request
    const response = await request(app)
                        .post('/launch')
                        .send(launchDataWithoutDate)
                        .expect('Content-Type', /json/)
                        .expect(400);

    expect(response.body).toStrictEqual({
            error: "Required parameters are missing!"
        });

   }
);

    

    test('It should catch invalid dates', async () => {
                         //testing a post request
    const response = await request(app)
                        .post('/launch')
                        .send(launchDataInvalidDate)
                        .expect('Content-Type', /json/)
                        .expect(400);

        expect(response.body).toStrictEqual({
            error: "Date parameter is incorrect"
        });
    });
})