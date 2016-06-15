var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientSchema = new Schema({
  firstName:  String,
  lastName: String,
  gender: String,
  dob: Date,
  insurance: String,
  isHomeless: Boolean,
  race: String
  // phonenumber: Number
  // ,pin: String,
  // appointment1: Boolean,
  // appointment1date: Date,
  // appointment2: Boolean,
  // appointment2date: Date,
  // appointment3: Boolean,
  // appointment3date: Date
});


// assign a function to the "methods" object of our animalSchema
patientSchema.methods.findSimilarTypes = function (cb) {
  return this.model('Patient').find({ type
: this.type }, cb);
}

var Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;