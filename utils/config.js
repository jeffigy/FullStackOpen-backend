require("dotenv").config();

const PORT = process.env.PORT;
const MONGOGB_URI = process.env.MONGOGB_URI;

module.exports = {
  MONGOGB_URI,
  PORT,
};
