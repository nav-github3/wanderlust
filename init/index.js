const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");


const MONGO_URL = "mongdb+srv://Navneet:navneet@navneet.q5s17.mongodb.net";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb+srv://Navneet:navneet@navneet.q5s17.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
