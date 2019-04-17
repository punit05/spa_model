const mongoose=require("mongoose");
var bcrypt=require("bcrypt");
const saltRounds = 10;
const SignUpAdmin=require("../models/signupadmin")
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'c5018cae',
  apiSecret: 'hN8oaMUkd68xan93'
});
module.exports = (app) => {


    



app.post("/admin",function(req,res)
{
    bcrypt.hash(req.body.Password, saltRounds, function (err,   hash) {
    var Name=req.body.Name;
    var Email=req.body.Email;
    var UserName=req.body.UserName;
    var Password=hash;
    var MobileNo=req.body.MobileNo
    
    var NewSpaAdmin={Name:Name,Email:Email,UserName:UserName,Password:Password,MobileNo:MobileNo};

    


    SignUpAdmin.create(NewSpaAdmin,function(err,Admin)
    {
        if(err)
        {
            console.log(err);
        }
        else 
        {
            res.json({
                message: "Data received successfully",
                data:Admin
              })
        }
    })
    
})
})
app.post("/login",function(req,res)
{
    
    var Password=req.body.Password;
        SignUpAdmin.findOne({'MobileNo':req.body.MobileNo},function(err,user)
        { 
            console.log("USER",user)
            if (user==null) {
                res.json({
                    message:"USername with this given mobile no does not exist please check the  mobile No"
                })
              console.log("HERE",err);
              return err;
             }  
            
            bcrypt.compare(Password, user.Password, function (err, result) {
              if (result === true) {

                var CurrentTime=new Date();
                
                console.log(CurrentTime);
                var otp=Math.floor(100000 + Math.random() * 999999)
console.log(otp);

               // res.redirect("/verify/"+user.MobileNo);

               


                //   res.json({
                //       message:"successfully logged in",
                //       data:user
                //   })
                
              } else {
                  res.json({
                      message:"Password not matched check the password bro!!"
                  })
               
              }
            })
          });
      })
app.get("/verify/:id",function(req,res)
{
    
    let phoneNumber = req.params.id;
    console.log(phoneNumber);
   


  

})




}