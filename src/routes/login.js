const express = require('express');
const routelogin = express.Router();
const passport = require('passport');
const session = require('express-session');


routelogin.get('/login' ,(req, res) =>{

    res.render('login');
    console.log("sim");


})

routelogin.post('/login' , async (req,res, next)=>{
    passport.authenticate('local', (err, user, info) => {
        if (err) {
          return next(err);
        }
           
        if (!user) {
          
          return res.status(401).json({ success: false, message: "Credenciais Invalidas!" });
        }
    
        
        req.logIn(user, (err) => {
           if (err) {
            return next(err);
          }
          console.log("foi")
          return res.status(200).json({ success: true});
          
       });
      })(req, res, next);

    
})

module.exports = routelogin;