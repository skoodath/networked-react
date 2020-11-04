require('dotenv').config();
const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
        user: process.env.email,
        pass: process.env.password
    }
});

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All works fine, congratz!');
  }
});

app.post('/send', (req, res) => {

  const mailOptions = {
    from: process.env.email,
    to: 'archana@networked.in, skoodath@gmail.com',
    subject: `NetworkEd- New interest from ${req.body.firstname}`,
    text: req.body.email,
    html: `
    <p>${req.body.firstname}  ${req.body.lastname} wants to connect</p>
    <h3>Contact Details</h3>
    <ul>
      <li>Name: ${req.body.firstname}  ${req.body.lastname} </li>
      <li>Email: ${req.body.email}</li>
      <li>Message: ${req.body.note}</li>
    </ul>
    `
  };

  transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
      console.log("Error sending message: " + err);
    } else {

      console.log("Message sent succesfully.");
    }
  });
    
});

const port = process.env.port || 3001;
app.listen(port, () => {
    console.log(('Server has started'));
});