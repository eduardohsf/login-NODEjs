const express = require('express');
const rotasingup = express.Router()
const adduser = require('../services/user_Service')
const modeluser= require('../models/users')


rotasingup.get('/singup', (req, res)=>{

    res.render('singup')

});

rotasingup.post('/singup',async (req, res) =>{


try {
    const {nome ,email, pass} = req.body

    const verifica = await modeluser.findOne({email:email})
     if(!verifica) {
        const novo = await adduser.criarUser(nome, email, pass);
        res.status(201).json({ message: 'Usuário Criado Com Sucesso', user: novo });
    
    }else{

        res.status(500).json({ message: 'Email já cadastrado'});
       
    } 
   
  } catch (error) {
    console.error('Erro ao criar Usuário', error);
    res.status(500).json({ error: 'Não foi possível cadastrar Usuário' });
  }

});



module.exports= rotasingup;