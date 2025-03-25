const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const { isAsyncFunction } = require("util/types");

const MONGO_URL = "mongodb+srv://Navneet:navneet@navneet.q5s17.mongodb.net";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main(){
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.send("Hi, I am root");
}); 



app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listing/index", { allListings });
});



// app.get("/testListing", async (req, res) =>{
//   let sampleListing = new Listing({
//     title : 'My New Villa ', 
//     description : 'By the Beach', 
//     price : 1200,
//     location : 'Calangute, Goa', 
//     country : 'India'
//   });




//   await sampleListing.save(); 
//   console.log('sample was save '); 
//   res.send('successfull testing ');

// });





app.listen(4040, () => {
  console.log("server is listening to port 4040");
});
