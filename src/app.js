const express = require('express');
const app = express();
const db = require('./db/connection');
app.set('view engine', 'ejs');
app.set('views', './views');
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
const authController = require('./controller/auth');
const User = require('./models/users')

const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


db()

const home = require('./routes/home');
const login = require('./routes/login');
const singup = require('./routes/singup')




app.use(singup)



app.use(session({ secret: '2803uqwjd09231j948fu9230',
resave: true,
saveUninitialized:true,
}))
app.use(passport.initialize());
app.use(passport.session()); 
app.use(express.static(path.join(__dirname, '../public')));
passport.use(new LocalStrategy(authController.login));
passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    console.log("user",user)
    done(null, user);
  } catch (error) {
    done(error);
  }
});
app.use(home);

app.use(login)










app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });