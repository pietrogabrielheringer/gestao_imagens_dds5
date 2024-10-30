import express from 'express'; 
const app = express(); 
const porta = 5000; 

import {mostrarImagem} from './controllers/imagensController.js';

app.get('/',(req,res)=>{
    res.send('API Funcionando!')
});

app.get('/public/:nomeImg',mostrarImagem)

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});

