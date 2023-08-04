const {Postgres} = require('postgres');
const {Pool} = require('postgres');



    // const getUsers = (req, res) => {
    //     pool.query('SELECT * FROM ORDERS', (error, results) => {
    //       if (error) {
    //         throw error
    //       }
    //       res.status(200).json(results.rows)
    //     })
    //   }



// app.get('/api/data' , async(req , res)=>{


//         try{
//             const query = `select * FROM ORDERS`;
//             const {rows} = await pool.query(query);
//             res.json(rows);

          
      
      
//         }catch(error){

//           console.error('Error in fetching the data from database:',error);
//           res.status(500).json({error:'Error fetching data'});

      
      
//         }
//       });
    


// pool.query(`CREATE TABLE IF NOT EXISTS NAME ( First_name VARCHAR(255))`);
// pool.query(`INSERT INTO ORDERS(order_id , order_name , order_details , order_date , order_price)
// VALUES(1 , 'LAPTOP' ,'RYZEN' , '02/07/2023' , 60000);`);


// pool.query(`SELECT * FROM NAME`);





module.exports = {Postgres};
