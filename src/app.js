
const express = require('express');
const { Client } = require('pg');
const app = express();

// PostgreSQL configuration
const dbConfig = {
  user: 'conas',
  host: 'localhost', 
  database: 'conas', 
  password: '1234', 
  port: 5432, 
};

// Create a PostgreSQL client
const client = new Client(dbConfig);

// Connect to the database
client.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to PostgreSQL database!');
});

// Create a table and insert some values
const createTableQuery = `CREATE TABLE IF NOT EXISTS my_table (id SERIAL PRIMARY KEY, name VARCHAR(255), age INT)`;

const insertDataQuery = `INSERT INTO my_table (name, age) VALUES ($1, $2), ($3, $4)`;

const sampleData = [{ name: 'John Doe', age: 30 }, { name: 'Jane Smith', age: 25 }];

client.query(createTableQuery, (err) => {
  if (err) {
    console.error('Error creating table:', err);
    return;
  }

  // Insert some sample values into the table
  const values = [sampleData[0].name, sampleData[0].age, sampleData[1].name, sampleData[1].age];
  client.query(insertDataQuery, values, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return;
    }
    console.log('Data inserted successfully:', result.rowCount);
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
