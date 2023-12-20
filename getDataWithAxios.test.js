const { expect, jest, it } = require("@jest/globals");
//  the above import is not required  (https://jestjs.io/docs/jest-object)

const axios = require("axios");
const getDataWithAxios = require("./getDataWithAxios");

it("mock axios functions", async () => {
  jest.spyOn(axios, "get").mockReturnValueOnce({ data: { id: 1 } });

  const res = await getDataWithAxios();
  expect(res.id).toBe(1);
}, 10000);
