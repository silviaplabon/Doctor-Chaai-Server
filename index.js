// require packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const doctorRoute = require("./Router/doctorRoute");

// use packages
const app = express();
app.use(express.json())
app.use(cors());
app.use(bodyParser.json());

//define port
const port = process.env.PORT || 4200;
const ObjectID = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mcsxh.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const AppointmentsCollection = client.db('Doctors_Chaai').collection("PatientsAppointmentsCollection");
  const AllDoctorsCollection = client.db('Doctors_Chaai').collection("PatientsAppointmentsCollection");


  app.get('/allDoctorsCollection/Show', (req, res) => {
    AllDoctorsCollection.find({})
      .toArray((err, products) => {
        res.send(products)
      })
  })

mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.cau0x.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful with Database`);
  })
  .catch((err) => console.log(err));


// for doctor routes
app.use("/doctor", doctorRoute);

app.get('/', async(req, res) => {
  try{
    res.send('Hello DB');
  } catch (err) {
    res.status(500).json({error: err})
  }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
