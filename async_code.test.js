const async_code = require("./async_code");

test("get the todo of id 1", async () => {
  const data = await async_code(1);
  expect(data.id).toBe(1);
});
