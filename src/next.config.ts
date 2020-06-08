require("dotenv").config();

export default {
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
};
