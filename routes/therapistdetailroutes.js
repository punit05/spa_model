const mongoose=require("mongoose");

const Therapist=require("../models/therapistdetails");
module.exports = (app) => {

app.post("/addtherapist",function(req,res)
{
var TherapistEmail=req.body.TherapistEmail;
var TherapistName=req.body.TherapistName;
var TherapistPhoneNo=req.body.TherapistPhoneNo;
var TherapistAddress=req.body.TherapistAddress;
var TherapistServices=req.body.TherapistServices;
var TherapistTimeSlot=req.body.TherapistTimeSlot;
var AddTherapist={TherapistEmail:TherapistEmail,TherapistName:TherapistName,TherapistPhoneNo:TherapistPhoneNo,TherapistAddress:TherapistAddress
,TherapistServices:TherapistServices,TherapistTimeSlot:TherapistTimeSlot}
    Therapist.find({'TherapistEmail':req.body.TherapistEmail},function(err,data)
    {
        if(data.length==0)
        {
            SpaDetail.create(AddTherapist,function(err,Therpist)
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
