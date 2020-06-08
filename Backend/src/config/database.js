const mongoose = require('mongoose');

const config = process.env.NODE_ENV == 'test' ? process.env.DB_TEST_HOST : process.env.DB_DEV_HOST; 

mongoose.connect(process.env.DB_PROD || config, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => console.log(`conectado no ${process.env.DB_PROD || config}`));

module.exports = mongoose;