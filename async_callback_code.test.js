const getTodoDataByIdCallBack = require("./async_callback_code");

test("get data async with callback", (done) => {
  getTodoDataByIdCallBack(1, (err, data) => {
    if (err) {
      done(Error);
    } else {
      try {
        expect(data.id).toBe(1);
        expect(data).toEqual({ id: 1 }); // for object value equality check
        done();
      } catch (error) {
        done(error);
      }
    }
  });
});
