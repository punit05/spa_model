const mongoose=require("mongoose");

const Therapist=require("../models/therapistdetails");
module.exports = (app) => {

app.post("/addtherapist",function(req,res)
{
var TherapistEmail=req.body.TherapistEmail;
var TherapistName=req.body.TherapistName;
var TherapistPhoneNo=req.body.TherapistPhoneNo;
var doorNumber=req.body.doorNumber;
var line1=req.body.line1;
var line2=req.body.line2;
var city=req.body.city;
var state=req.body.state;
var pincode=req.body.pincode;
var TherapistServices=req.body.TherapistServices;
var TherapistTimeSlot=req.body.TherapistTimeSlot;
var AddTherapist={TherapistEmail:TherapistEmail,TherapistName:TherapistName,TherapistPhoneNo:TherapistPhoneNo,
    doorNumber:doorNumber,line1:line1,line2:line2,city:city,
    state:state,pincode:pincode
,TherapistServices:TherapistServices,TherapistTimeSlot:TherapistTimeSlot}
    Therapist.find({'TherapistEmail':req.body.TherapistEmail},function(err,data)
    {
        console.log("HERE");
        if(data.length==0)
        {
            Therapist.create(AddTherapist,function(err,Therpist)
            {
                if(err)
                {
                    console.log("HERE",err);
                    res.json({
                        message:"error"
                    })
                }
                else 
                {
                    res.json({
                        message: "Data received successfully",
                        data:Therapist
                      })
                }
            })
            console.log("You can create a new Therapist");
        }
        else 
        {
            res.json({
                message: "Therapist already exists with this given email"
              })
            console.log(data);
        }
    })

    
})

}
