const request = require("supertest");
const app = require("../index");

describe("Index endpoint", () => {
  it("should return template text", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("info");
  });

  it("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
  });
});
