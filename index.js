const express= require('express')
const bodyParser= require('body-parser')
const nodemailer=require('nodemailer');
const exphbs = require('express-handlebars');
const path = require('path')


const app=express();

app.engine('handlebars', exphbs())
app.set('view engine','handlebars')

app.use('/public', express.static(path.join(__dirname,'public')));


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req,res)=>{
    res.render('contact')
})
 let transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: 'usermail',
      pass: 'password'
    }
  });
  
  let mailOptions = {
    from: 'emailfrom',
    to: 'emailto',
    subject: 'Intern Meeting',
    html:
    '<div style="backgroundColor:gray  color:white"> <h1 style="color:red">Meeting </h1> <br/><br/><p>Hello Friends find attached meeting info</p><br/><br/><br/> <br/><img src="https://cdn.pixabay.com/photo/2018/03/22/02/37/email-3249062__480.png"> </div>' ,
    text: 'That was easy!',

    attachments: [{   
      filename: 'first.txt',
      content:'Meeting: Interns Meeting Time: 100:00Pm Topic:Redux Guest : Jonathan Ndambuki' 
  }]

  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });  
app.listen('4000', ()=> console.log('server  started ....'));