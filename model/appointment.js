var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new Schema({
 phonenumber: Number,
	pin: Number
});

// assign a function to the "methods" object of our animalSchema
appointmentSchema.methods.findSimilarTypes = function (cb) {
  return this.model('appointments').find({ type
: this.type }, cb);
}

var appointments = mongoose.model('appointments', appointmentSchema);
module.exports = appointments;