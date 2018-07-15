const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: String,
  email: String, 
  username: String,
  password: String,
  picture: {
    type: String, 
    default: '../images/cats.jpg',
  },
  facebookID: String,
  googleID: String,
  role: {
    type: String,
    enum: ['User', 'Admin', 'Expert']
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;