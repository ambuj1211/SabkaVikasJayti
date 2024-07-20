const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const path = require('path');
const { MongoClient } = require('mongodb');

const app = express();
const port = process.env.PORT || 5500;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// MongoDB setup
const uri = 'mongodb+srv://brilliantambuj59:srnrrrb0902_beam052592Ambuj952621@ambujcluster.c5hf5ze.mongodb.net/?retryWrites=true&w=majority&appName=AmbujCluster';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  } else {
    console.log('Connected to MongoDB');

    const collection = client.db('Customer').collection('customer_detail');

    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'sabkavikasjayti.ngo@gmail.com',
        pass: 'Sabkavikasjayti.ngo@1'
      }
    });

    app.post('/submit_form', (req, res) => {
      const { name, email, phone, address, productType, productName } = req.body;

      const mailOptions = {
        from: 'sabkavikasjayti.ngo@gmail.com',
        to: 'brilliantambuj59@gmail.com',
        subject: 'New Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nAddress: ${address}\nProduct Type: ${productType}\nProduct Name: ${productName}`
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email', error);
          return res.status(500).send({ message: 'Error sending email', error });
        }

        // Save form data to MongoDB
        collection.insertOne({ name, email, phone, address, productType, productName }, (err, result) => {
          if (err) {
            console.error('Error saving to database', err);
            return res.status(500).send({ message: 'Error saving to database', error: err });
          }

          res.status(200).send({ message: 'Form submitted successfully!' });
        });
      });
    });

    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  }
});
