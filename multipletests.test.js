const sum = require("./sum");

// below function can be use to do some task before any test is run in this suites
beforeAll(() => {
  //   console.log("before all");
});

// below function can be use to do some task before each test is run in this suites
beforeEach(() => {
  //   console.log("before each");
});

// below function can be use to do some task after each test is run in this suites
afterEach(() => {
  //   console.log("after each");
});

// below function can be use to do some task after all test is run in this suites
afterAll(() => {
  //   console.log("after all");
});

describe("run multiple test for sum function", () => {
  test("sum of 1 and 2 should be 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("sum of 2 and 2 should be 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  // we can use it or test to start the test block

  it("sum of 10 and 10 should be 20", () => {
    expect(sum(10, 10)).toBe(20);
  });
});
