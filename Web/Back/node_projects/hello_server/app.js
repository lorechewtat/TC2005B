
import express from 'express';

import fs from 'fs'

const app = express();

const port = 3000

app.use(express.json()) // para interpretar el lenguaje json

app.get('/', (req,res) =>{  // => es una funcion de tipo anonima, funcion que no tiene nombre, solo se llama en ese momento
    fs.readFile('./html/home.html', 'utf8', //utf8 reconoce acentos y caracteres especiales
    (err,html) => {
        if(err)
        {  
            res.status(500).send('There was an error: ' + err)
            return
        }

        console.log("Sending page...")
        res.send(html)
        console.log("Page sent")
    })
})  //get es le pido algo al servidor 

app.get('/person', (req,res) =>  // '/' es un endpoint
{
    console.log("hello server")

    const person = {
        name : "Lore",
        email:"A01785378@tec.mx",
        message: "Hello world from server"
    }

    res.json(person) //regresa un objeto de persona
    //tecnicamente si es un json bien formado 
})  //get es le pido algo al servidor

app.listen(port, () => {
    console.log(`Example app listening on port 
        ${port}`) 

}) //la ruta en este momento es localhost: 3000/