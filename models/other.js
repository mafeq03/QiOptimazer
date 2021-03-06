const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const otherSchema = new Schema({
  name: String,
  description: String,
  image: String,
  symptoms: String,
  reviews:[
    {
      user: String,
      comments: String
    }
  ]
 });

 const Other = mongoose.model("Other", otherSchema);
 module.exports = Other;