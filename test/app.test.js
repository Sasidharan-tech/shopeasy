const request = require('supertest');
const {app,server} = require('../app'); // Import the server for testing

describe('GET /', () => {
   it('should return 200 status code and correct message', async () => {
     const res = await request(app).get('/');
     expect(res.status).toBe(200);
     expect(res.text).toBe('Welcome to ShopEasy by Sasidharan!');
   });
  })

  afterAll(() => { 
    server.close(); // Close the server after tests are done
  });