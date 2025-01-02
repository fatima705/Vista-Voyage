const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/VistaVoyage", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017';
const dbName = process.env.DB_NAME || 'mydatabase'
// Schema and Model
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});
const Item = mongoose.model("Item", ItemSchema);

// API Endpoints
app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.post("/items", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.json(newItem);
});

app.listen(5000, () => console.log("Server running on port 5000"));
