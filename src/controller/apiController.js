const express =require('express');
//const { users } = require('../config/dbConnectionConfig');



const apiCalling = async(request , response) =>{


    response.send("Hello Api")

    
}

const apipart = async(req , res) =>{


    res.send("Hello this is second API");
}

// const apiuser = async(req , res)=>{

//  app.post('/adduser' , (req ,res)=>{

//         const username  = req.body["username"];
//         const password = req.body["password"];
    
//         console.log("Username:"+username);
//         console.log("Password:"+password);
    
//         const insertSTMT = `INSERT INTO accounts(username , password) VALUES ('${username}' , '${password})`;
    
    
//         pool
//         .query(insertSTMT)
//         .then((res)=>{
//             console.log("Data Saved");
//             console.log(res);
    
//         })
//         .catch((err)=>{
//             console.log(err);
    
//         });
    
    
//         console.log(req.body);
//         res.send("Response recieved"+req.body);
//     });
    

// }



const PostApi= async(req,res)=>{


    const {username, password}=req.body

    //check table is present or not, if no than write the table creation query

   const qyery =  `CREATE TABLE IF NOT EXISTS accounts(userid SERIAL PRIMARY KEY , username VARCHAR(255) NOT NULL , password VARCHAR(255) NOT NULL )`;
   pool.query(query, (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Table is successfully created');
    client.end();
});










    //if yes then insert data here

    const query = `
    INSERT INTO users (username , password)
    VALUES ('hit2003' , '12345')
    `;
    client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('Data insert successfully');
        client.end();
    });






    //after inserting the data  than send the data as response

    res.send(query);







}




module.exports = {apiCalling , apipart , PostApi}