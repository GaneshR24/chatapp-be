const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dooznvzsd",
  api_key: "364232665938429",
  api_secret: "-K_8MKaav9f3MfSWTUGOQ4Uhlsg",
});

module.exports = cloudinary;