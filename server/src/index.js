import express from 'express'; 
const app = express(); 
const porta = 5000; 

import {criarImagem, mostrarImagem} from './controllers/imagensController.js';

app.get('/',(req,res)=>{
    res.send('API Funcionando!')
});

app.get('/public/:nomeImg',mostrarImagem)

//CRUD Imagem

app.post('/imagem', criarImagem);
app.post('/imagem', mostrarImagem);

app.listen(porta, ()=>{
    console.log(`API Rodando na porta ${porta}`)
});

