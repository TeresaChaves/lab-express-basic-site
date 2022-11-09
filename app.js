const express = require('express')
const { create } = require('hbs')
const path = require('path')
const Product = require('./models/product.model')

const app = express()

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')));

require('./db/0_ddbb-conection')


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/tienda', (req, res) => {
    Product
        .find()
        .sort({ price: 1 })
        .then(allProducts => {
            res.render('la_tienda', { products: allProducts })
        })
        .catch(err => console.log(err))



})








app.listen(3000, () => console.log('🏃‍ on port 3000'));

