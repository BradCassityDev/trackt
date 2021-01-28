const cloudinary = require("cloudinary").v2;

require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const api_secret = process.env.API_SECRET;

// Get the timestamp in seconds
const timestamp = Math.round(new Date().getTime() / 1000);

// Show the timestamp
// console.log("Timestamp:", timestamp);

// Get the signature using the Node.js SDK method api_sign_request
const signature = cloudinary.utils.api_sign_request(
  {
    timestamp: timestamp,
  },
  api_secret
);

// Show the signature
// console.log('Signature:', signature);

module.exports = { cloudinary };
