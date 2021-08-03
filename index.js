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
const port = 3000;

// db connection with mongoose
mongoose
  .connect(`mongodb://localhost/doctor`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successfully`);
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
});

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
