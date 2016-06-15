var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientloginSchema = new Schema({
 phonenumber: Number,
	pin: Number
});

// assign a function to the "methods" object of our animalSchema
patientloginSchema.methods.findSimilarTypes = function (cb) {
  return this.model('Patientlogin').find({ type
: this.type }, cb);
}

var Patientlogin = mongoose.model('Patientlogin', patientloginSchema);
module.exports = Patientlogin;