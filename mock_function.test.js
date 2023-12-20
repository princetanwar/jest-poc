const axios = require("axios");

// Mock functions allow you to test the links between code by erasing the actual implementation of a function

test("mock the function call", () => {
  console.log(axios);
  const fetchData = jest.fn((arg) => arg); // function body is optional

  //   fetchData.mockReturnValueOnce(1); // this will be the result of function first call

  const result = fetchData(1); // calling mock function

  expect(result).toBe(1);
});

// function that are make api call only are great candidate for mock function
