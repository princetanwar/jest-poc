// const axios = require("axios");

const getTodoDataById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id });
    }, 2000);
  });
};

module.exports = getTodoDataById;
