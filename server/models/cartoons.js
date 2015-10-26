var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Cartoon = new Schema({
  name: String,
  character: String
});

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/cartoons');

module.exports = mongoose.model('cartoons', Cartoon);
