const express = require('express');
const bodyParser = require('body-parser'); // parse incoming JSON
const cors = require('cors');

const app = express(); // initialize app with express

// Middleware
app.use(bodyParser.json());
app.use(cors());

const items = require('./routes/api/items');

app.use('/api/items', items); // any route going to api/items, directed to 'items'

const port = process.env.PORT || 5000; // run port 5000 on localhost

app.listen(port, () => console.log(`Server started on port ${port}`));