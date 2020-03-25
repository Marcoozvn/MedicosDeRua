const mongoose = require('mongoose');

const AnamneseSchema = mongoose.Schema({}, { strict: false });

module.exports = mongoose.model('Anamnese', AnamneseSchema);