const app = require('express')()

app.get('/', (req, res) => {
  res.send("Hello from Cloud Pak for Apps!!!!!");
});
 
module.exports.app = app;
