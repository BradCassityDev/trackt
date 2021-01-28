const router = require('express').Router();
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

router.route('/deletephoto').delete((req, res) => {
    cloudinary.config({
        cloud_name: "trackt",
        api_key: "464351718111111",
        api_secret: "96ghx_SKtHqWxFmItRvfLOT4tD8",
      });
      
      cloudinary.uploader.destroy("", function (error, result) {
        console.log(error, result);
      });
      
      res.status(200).send({message: 'Deleted'});
});

module.export = router;