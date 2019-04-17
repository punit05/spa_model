const express=require("express");
const app=express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser=require('cookie-parser');
const morgan=require('morgan');
var passport=require("passport");
var LocalStrategy=require("passport-local");
const SignUpAdmin=require("./models/signupadmin")

mongoose.connect('mongodb://localhost:27017/spamodel', {useNewUrlParser: true});
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(morgan('dev'));
app.use(cookieParser());
app.use(require("express-session")(
    {
        key:'user_sid',
        secret:"IT IS HARD",
        resave:false,
        saveuninitialized:false,
        cookie:{
            expires:600000
        }
    }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(SignUpAdmin.authenticate()));
// passport.serializeUser(SignUpAdmin.serializeUser());
// passport.deserializeUser(SignUpAdmin.deserializeUser());



// app.use((req, res, next) => {
//     if (req.cookies.user_sid && !req.session.user) {
//         res.clearCookie('user_sid');        
//     }
//     next();
// });



require("./routes/spaadminroutes")(app);
require("./routes/propertyroutes")(app);


const PORT = process.env.port || 5000;

app.listen(PORT, function (err) {
    if (err) console.log(err);
    else console.log(`WOOHOO Server is running on port ${PORT}`)
});