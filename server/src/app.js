const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/api/v1/ping', (req, res) => {
  res.json({ ok: true, message: 'Server is running!' });
});

module.exports = app;