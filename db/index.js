module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/mongoblog_db', { useNewUrlParser: true, useUnifiedTopology: true })
