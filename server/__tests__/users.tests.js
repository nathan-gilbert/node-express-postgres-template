const request = require("supertest");
const app = require("..");

describe("Users endpoint", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/api/users");
    expect(res.statusCode).toEqual(200);
  });
});
