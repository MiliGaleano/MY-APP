const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mili1993:mili1993@cluster0-8yatb.mongodb.net/mytinerary?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();
var cors = require('cors')
const port = 5000;

const cityRoutes = require('./componentes/cityroutes/cityrouter');


app.use('/api', cors(), cityRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.get('/cities', function(req, res) {
    res.send('estas son mis ciudades!');  
});


app.listen(port, () => console.log(`Listening on port ${port}`)); 


