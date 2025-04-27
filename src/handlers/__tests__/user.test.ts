import { createNewUser } from "../user";

// TODO: don't forget to clean up the database after each test
describe("User Handler", () => {
  it("should create a new user", async () => {
    const req = {
      body: {
        username: "testuser",
        password: "testpassword",
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    await createNewUser(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      token: expect.any(String),
    });
  });
});
