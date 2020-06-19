const request = require("supertest");
const app = require("..");

describe("Index endpoint", () => {
  it("should return template text", async () => {
    const res = await request(app).get("/api");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("info");
  });
});
