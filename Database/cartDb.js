const mongoose = require("mongoose");
const cartData = require("../models/cartData");

mongoose.connect(
  "mongodb://priyanshup891:12345@fasho-shard-00-00.hy4xh.mongodb.net:27017,fasho-shard-00-01.hy4xh.mongodb.net:27017,fasho-shard-00-02.hy4xh.mongodb.net:27017/FASHO?ssl=true&replicaSet=atlas-11ebgu-shard-0&authSource=admin&retryWrites=true&w=majority"
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database Connected");
});

const cartDataDb = async () => {
  await cartData.deleteMany({});

  const c = new cartData({
    id: 1,
    name: "hdkd",
    image1: "unknown",
    price: 43,
  });
  await c.save();
};

cartDataDb().then(() => {
  mongoose.connection.close();
});
