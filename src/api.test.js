const request = require('supertest');
const app = require('./api'); 

test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
  expect(response.body).toHaveLength(2); 
});



test('POST /tasks returns all tasks', async () => {
    const response = await request(app).post('/tasks');
    expect(response.status).toBe(201);
    expect(response.body).toHaveLength(2); 
}); 