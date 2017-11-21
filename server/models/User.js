const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
   googleID: String
})

mongoose.model('users', User);
