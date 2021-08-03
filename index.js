const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
app.use(cors());
app.use(bodyParser.json());


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
  
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})






















 



//   app.get('/ingredientDrinksByName/:name', (req, res) => {
//     const name = req.params.name;
//     AllDrinksCollection.find({
//       $or: [{ "strIngredient1": name }, { "strIngredient2": name }, { "strIngredient3": name }, { "strIngredient4": name }
//         , { "strIngredient5": name }, { "strIngredient6": name }, { "strIngredient7": name }, { "strIngredient8": name }, { "strIngredient9": name }, { "strIngredient10": name }]
//     })
//       .toArray((err, products) => {
//         res.send(products)
//       })
//   })

//   app.get('/similarDrink/:glass/:category/:alcoholic', (req, res) => {
//     const name = req.params.name;
//     AllDrinksCollection.find({ $and: [{ strGlass: req.params.glass }, { strCategory: req.params.category }, { strAlcoholic: req.params.alcoholic }] })
//       .toArray((err, products) => {
//         res.send(products)
//       })
//   })


//   app.get('/similarDrink/:glass/:category/:alcoholic', (req, res) => {
//     const name = req.params.name;
//     AllDrinksCollection.find({ $and: [{ strGlass: req.params.glass }, { strCategory: req.params.category }, { strAlcoholic: req.params.alcoholic }] })
//       .toArray((err, products) => {
//         res.send(products)
//       })
//   })
//   app.get('/ingredientsListCollection', (req, res) => {
//     IngredientsListCollection.find({})
//       .toArray((err, products) => {
//         res.send(products)
//       })
//   })