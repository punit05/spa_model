const mongoose=require("mongoose");
const SpaDetail=require("../models/propertyroutes");
module.exports=(app)=>
{
    app.post("/property",function(req,res){

        var NameOfProperty=req.body.NameOfProperty;
        var StarRating=req.body.StarRating;
        var ContactName=req.body.ContactName;
        var PhoneNumber=req.body.PhoneNumber;
        var AlternativePhoneNumber=req.body.AlternativePhoneNumber;
        var DoorNumber=req.body.DoorNumber;
        var line1=req.body.line1;
        var line2=req.body.line2;
        var city=req.body.city;
        var state=req.body.state;
        var pincode=req.body.pincode;
        var GSTNumber=req.body.GSTNumber;
        var  ParkingAvailable=req.body.ParkingAvailable;
        var LanguageSpoken=req.body.LanguageSpoken
        var Services=req.body.Services
        var NewProperty={NameOfProperty:NameOfProperty,StarRating:StarRating,ContactName:ContactName,PhoneNumber:PhoneNumber,AlternativePhoneNumber:AlternativePhoneNumber,
        DoorNumber:DoorNumber,line1:line1,line2:line2,city:city,state:state,pincode:pincode,GSTNumber:GSTNumber,ParkingAvailable:ParkingAvailable, LanguageSpoken:LanguageSpoken,Services:Services}
            SpaDetail.find({'NameOfProperty':req.body.NameOfProperty},function(err,data)
            {console.log("Data",data);
            console.log("Data.length",data.length);
                if(data.length==0)
                {
                    SpaDetail.create(NewProperty,function(err,SpaStore)
                    {
                        if(err)
                        {
                            console.log("HERE",err);
                            res.json({
                                message:"erro"
                            })
                        }
                        else 
                        {
                            res.json({
                                message: "Data received successfully",
                                data:SpaStore
                              })
                        }
                    })
                    console.log("You can create a new spa");
                }
                else 
                {
                    res.json({
                        message: "Spa already exists with this given name"
                      })
                    console.log(data);
                }
            })
    
})
}