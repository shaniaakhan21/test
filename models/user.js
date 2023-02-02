const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const userSchema = new mongoose.Schema({
  name: String,
  address: String,
  phone: String
});
const User = mongoose.model("User", userSchema);
module.exports = User;

