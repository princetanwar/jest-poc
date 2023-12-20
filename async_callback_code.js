const getTodoDataByIdCallBack = (id, cb) => {
  setTimeout(() => {
    cb(null, { id: id });
  }, 2000);
};

module.exports = getTodoDataByIdCallBack;
