const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const herbSchema = new Schema({
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

 const Herb = mongoose.model("Herb", herbSchema);
 module.exports = Herb;


