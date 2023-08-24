// Require the Cloudinary library
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dzed8n2kj",
    api_key: "282439834296465",
    api_secret: "f2vQnUVtK7zRgMdV07_7tjncHO0",
    secure: true,
});

module.exports = cloudinary;
