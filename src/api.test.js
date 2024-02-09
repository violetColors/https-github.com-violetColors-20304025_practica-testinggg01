const request = require("supertest");
const app = require("./api");

test("GET /tasks should return all tasks", async () => {
    const response = await request(app).get('/tasks');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2)
});

test("Get /tasks:id should return 1 task", async () => {
    const response = await request(app).get("/tasks/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({id:1,description:"Do something",title:"Task 1"})
})

test("Post /tasks should create a task", async () => {
    const response = await request(app).post("/tasks").send({description:'Test Task', title:'Test'}).set('Accept','application/json');
    expect(response.status).toBe(201);
    expect(response.body.description).toBe('Test Task');
})
test("Put /tasks:id should update a task", async()=>{
    const response = await  request(app).put("/tasks/2").send({description:'Updated Test'});
    expect(response.status).toBe(200);
    expect(response.body.description).toBe('Updated Test');
})

test("Delete /tasks:id should delete a task", async()=>{
    const response = await request(app).delete("/tasks/2")
    expect(response.status).toBe(204);
})