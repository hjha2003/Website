const { response } = require('express');
const {Pool} = require('postgres');


const pool = new Pool({


  user: 'conas',
  host: 'localhost',
  database: 'conas',
  password: 1234,
  port: 5432,




});




// const CreateTblQuery = `CREATE TABLE Accounts(user_id SERIAL PRIMARY KEY  , 
//     username VARCHAR(50) UNIQUE NOT NULL ,
//     password VARCHAR(50) UNIQUE NOT NULL);`



// pool.query(CreateTblQuery).then((res)=>{

// console.log("Table Created");
// console.log(res);


// }).catch((err)=>{
// console.log(err);

// });




// const CreateTblQuery = `CREATE TABLE Accounts(user_id SERIAL PRIMARY KEY  , 
//                         username VARCHAR(50) UNIQUE NOT NULL ,
//                         password VARCHAR(50) UNIQUE NOT NULL);`



// pool
// .query(CreateTblQuery)
// .then((response)=>{

//   console.log("Table Created");
//   console.log(response);


// })
// .catch((err)=>{
//   console.log(err);

// });
// pool.query(`CREATE DATABASE INFO;`).then((response)=>{

//   console.log("Database Created");
//   console.log(response);
// })
// .catch((err)=>{

//   console.log(err);

// })



module.exports = {Pool};
