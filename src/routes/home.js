const express = require('express');
const rotahome = express.Router();

rotahome.get('/', (req, res)=>{
    if (req.isAuthenticated()) {
        const nome = req.user.nome
        const email = req.user.email
        console.log(nome)
    res.render('index',{nome:nome,email:email})
    console.log('estou no home')
}else{
    res.redirect('login')
    console.log('vou ser redirecinado para login')

}


});





module.exports = rotahome;