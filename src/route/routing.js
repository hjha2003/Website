const express =require('express');

const route = express.Router();

const Controller = require('../controller/apiController');



route.get("/status",Controller.apiCalling)

route.get("/change",Controller.apipart)

route.post("/getuser" ,Controller.PostApi);



module.exports = route;