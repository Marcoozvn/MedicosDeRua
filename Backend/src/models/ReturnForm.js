const mongoose = require('mongoose');

const ReturnSchema = mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('Return', ReturnSchema);