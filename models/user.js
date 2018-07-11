const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  name: String,
  email: String, 
  picture: {
    type: String, 
    default: '',
  },
  role: {
    type: String,
    enum: ['User', 'Admin', 'Expert']
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;