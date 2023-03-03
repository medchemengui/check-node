const nodemailer=require('nodemailer')
require('dotenv').config()

const transporter=nodemailer.createTransport({
    service:"gmail",
    port:587,
    host:"gmail.com",
    secure:false,
    auth:{
        user:"chiraz26mechi@gmail.com",
        pass:"fdrgbuufuczdrlwz",   
    },
    tls:{
        rejectUnauthorized:false
    }
})

transporter.verify((error,success)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log('server is signed')
    }
})

const nodemail=async (req,res,next)=>{
    var fullname=req.body.fullname
    var email=req.body.email
    var subject=req.body.subject
    var message=req.body.message
   
    var html=`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div>
            <h1>${fullname}</h1>
        </div>
        <div>
            <h2>${email}</h2>
    
        </div>
        <div>
            <h6>${subject}</h6>
        </div>
        <div>
            <p>${message}</p>
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731__340.png">
        </div>
    </body>
    </html>`
    var mail={
        from:email,
        to:'chiraz26mechi@gmail.com',
        subject:subject,
        message:message,
        html:html
    }
    transporter.sendMail(mail,(error,data)=>{
        if(error){
           res.json({status:"failed"})
        }
        else {
           res.json({status:"success"})
        }
       })
    
}



 module.exports={nodemail}
