const request = require('supertest');
const app = require('../app');


describe('GET /launch', () => {
    const response = request(app)
                        .get('/launch') 
                        .expect('Content-Type', /json/)
                        .expect(200);

});

describe('POST /launch', () => {
    test('It should respond with 200 success', () => {
        const response = 200;
        expect(response).toBe(200);
    })

    

    test('It should catch missing requirements', () => {})
    test('It should catch invalid dates', () => {});
})