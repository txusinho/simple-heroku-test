const data = require("../integration/data.json");
const app = require("../../src/app");
const request = require("supertest");

describe("POST /", function() {
  it("responds with json", function(done) {
    request(app)
      .post("/")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
          expect(response.body.result).to.equal(8);
          done();
      })
      .catch(err => done(err));
  });
});
