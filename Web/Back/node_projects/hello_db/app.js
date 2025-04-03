"use strict";

// Importing modules
import express from "express";

import mysql from "mysql2/promise";

const app = express();
const port = 3000;

app.use(express.json());

// Function to connect to the MySQL database

// The async keyword is used to define an asynchronous function. An asynchronous function is a function that operates asynchronously, using an implicit Promise to return its result.
// A Promise is an object representing the eventual completion or failure of an asynchronous operation. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason.

async function connectToDB() { //hacer llamadas asincronas, varias llamadas al mismo tiempo
  return await mysql.createConnection({ //await dice a donde me voy a conectar, a que usuario, que contraseña y que base de datos
    host: "localhost", //dominio donde este el servidor
    user: "cardUser",
    password: "Cupanki:)1012",
    database: "cards_db",
  });
}

  app.get("/api/cards/:id", async (request, response) => { //obtener un end point que va a ser apicards
    let connection = null;
  

    //intentar lo que esta en el bloque de try, si pasa un error se va al bloque de catch, 
    // y finally es que lo haga si o si sin importar que haya o no un error
    try { 

      // The await keyword is used to wait for a Promise. It can only be used inside an async function.
      // The await expression causes async function execution to pause until a Promise is settled (that is, fulfilled or rejected), 
      // and to resume execution of the async function after fulfillment. When resumed, the value of the await expression is that of 
      // the fulfilled Promise.
  
      connection = await connectToDB(); //se pueden hacer varias conexiones al mismo tiempo, intenta establecer una conexion
  
      // The execute method is used to execute a SQL query. It returns a Promise that resolves with an array containing the results of the query (results) and an array containing the metadata of the results (fields).
      const [results, fields] = await connection.execute("select * from card where card_id = ?", [request.params.id]);
       //aqui ejecuta queries de sql si si logra una conexion, donde estan las ? es el orden en donde se van a ir agregando
        //results son filas de respuestas y fields son los metadatos de la respuesta
      console.log(`${results.length} rows returned`);
      console.log(results);
      response.status(200).json(results);
    }

    catch (error) {
      response.status(500);
      response.json(error);
      console.log(error);
    }
    finally {
      // The finally statement lets you execute code, after try and catch, regardless of the result. In this case, it closes the connection to the database.
      // Closing the connection is important to avoid memory leaks and to free up resources.
      if (connection !== null) {
        connection.end();
        console.log("Connection closed succesfully!");
      }
    }
  });

  app.listen(port, () => { //listen es para escuchar el puerto y ejecutar la aplicacion
    console.log(`Listening on port ${port}...`); //esto es para que sepa que la aplicacion esta corriendo
  })