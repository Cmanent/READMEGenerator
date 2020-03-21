const axios = require("axios")
const api = {
  getUser(username) {
// axios call
return axios.get("https://api.github.com/users/" + username)
  }
};

module.exports = api;
