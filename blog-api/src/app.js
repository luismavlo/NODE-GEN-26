const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//routes
const userRoutes = require('./routes/user.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
app.use('/api/v1/users', userRoutes);
// /api/v1/auth
module.exports = app;
