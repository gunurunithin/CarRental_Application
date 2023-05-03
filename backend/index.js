const express = require("express");
const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const mongoose = require("mongoose");
const bodyPaser = require("body-parser");
var cors = require("cors");
const app = express();
app.use(express.json());
app.use(bodyPaser.urlencoded({ extended: false }));
app.use(bodyPaser.json());
app.use(cors());
const port = 4000;
const url =
  "mongodb+srv://gunurunithin:@cluster0.zffs3zd.mongodb.net/?retryWrites=true&w=majority";


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://gunurunithin:1234@cluster0.zffs3zd.mongodb.net/rental"
  );
  console.log("Database is Connected!");
}

//-------------geting All cars-------------

const CarData = new mongoose.Schema({
  car_name: String,
  car_fuel: String,
  car_seating: String,
  car_number: String,
  car_image: String,
  car_rent: String,
});

const Out = mongoose.model("carsData", CarData);

app.get("/getdata", async (req, res) => {
  const docs = await Out.find({});
  res.json(docs);
  console.log(docs);
});

//---------------------Posting Booking Data---------

const Bookingdata = new mongoose.Schema({
  // car_name: String,
  name: String,
  mobil: String,
  address: String,
  StartTime: String,
  EndTime: String,
});

const Booking = mongoose.model("Bookings", Bookingdata);

app.post("/PostData", async (req, res) => {
  let book = new Booking();
  // book.car_image=req.body.BookingDetails.car_image;
  // book.car_name=req.body.BookingDetails.car_name;
  book.name = req.body.BookingDetails.name;
  book.mobil = req.body.BookingDetails.mobil;
  book.address = req.body.BookingDetails.address;
  book.StartTime = req.body.BookingDetails.StartTime;
  book.EndTime = req.body.BookingDetails.EndTime;
  const doc = await book.save();
  console.log(doc);
  res.json(doc);
});

//-----------------get View Status Data---------------------

app.get("/bookingsdata", async (req, res) => {
  const docs = await Booking.find({});
  res.json(docs);
  console.log(docs);
});

app.listen(port, () => {
  console.log("Server is Connected");
});