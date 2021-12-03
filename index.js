const express = require("express");

const path = require("path");

/**
 * importing route handlers
 */

const todoRoutes = require('./routes/api/todo')

const PORT = process.env.PORT || 8000;

const app = express();
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, "public")));

/**
 * routes
 */

app.use('/todo', todoRoutes)


/**
 * App is listening to port given
 */

app.listen(PORT, () => {
  console.log(`App is running in ${PORT}`);
});
