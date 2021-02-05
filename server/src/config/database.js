const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(
  'mongodb://mongodb:27017/alinecampos',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: { authSource: "admin" },
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pass: process.env.MONGO_INITDB_ROOT_PASSWORD,
  },
);


module.exports = mongoose;