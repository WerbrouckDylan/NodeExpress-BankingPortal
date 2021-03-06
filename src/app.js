/**
 * Required External Modules
 */
const fs = require('fs');
const path = require('path');
const express = require('express');

/**
 * App Variables
 */
const app = express();

/**
 *  App Configuration
 */
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(
  '/css',
  express.static(path.join(__dirname, './public/css'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, './public/js'))
);
/**
 * Routes Definitions
 */

app.get('/', (req,res) =>{
    res.render('index', {title: 'Index'})
})


/**
 * Server Activation
 */

 app.listen(3000, () =>{
     console.log('PS Project Running on port 3000!')
 })
