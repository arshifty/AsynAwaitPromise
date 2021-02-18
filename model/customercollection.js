const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  userName: {
    type: String
  },
  contact: {
    type: Number
  },
  address: {
    type: String
  }
  });
  
  module.exports = mongoose.model('customer', PostSchema  );