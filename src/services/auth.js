const axios = require('axios');
const GOOGLE_API = require('../config/auth');

function getUser(idToken) {
  return axios
    .get(GOOGLE_API, { params: { access_token: idToken } })
    .then(response => response.data);
}

module.exports = {
  getUser,
};