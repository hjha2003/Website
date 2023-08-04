const express =require('express');
const bodyParser = require('body-parser');

const route = require('./route/routing');
const cors = require('cors');
const apiusers = require('./controller/apiController')

 

const model = require('./model/sqlModel');


const app = express();


app.use(bodyParser.json()); 
app.use(express.json());


app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());


app.get('/adduser' , (req ,res)=>{

    console.log(req.body);
    res.send("Response recieved"+req.body);
});




// app.post('/adduser' , (req ,res)=>{

//     const username  = req.body["username"];
//     const password = req.body["password"];

//     console.log("Username:"+username);
//     console.log("Password:"+password);

//     const insertSTMT = `INSERT INTO accounts(username , password) VALUES ('${username}' , '${password})`;


//     pool
//     .query(insertSTMT)
//     .then((res)=>{
//         console.log("Data Saved");
//         console.log(res);

//     })
//     .catch((err)=>{
//         console.log(err);

//     });


//     console.log(req.body);
//     res.send("Response recieved"+req.body);
// });




app.use("/adduser",route);

app.listen(4000,function(){

    console.log(`express is running on port nos 4000`);




})



