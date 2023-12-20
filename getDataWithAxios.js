const axios = require("axios");

const getDataWithAxios = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return res.data;
};

module.exports = getDataWithAxios;
