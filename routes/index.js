const express = require('express')
const router = express.Router()
const { loadDish } = require('../resources/dish')

router.get('/', async (req, res) => {
    const dish = await loadDish()
    res.render('listDish', { 'title': 'List Dish', 'data': dish.data })
})

router.get('/add', (req, res) => {

    res.render('addDish', { 'title': 'Add Dish' })
})

router.post('/add', async (req, res) => {
    const { id_product, name, price, number, description, brand } = req.body

    data = {
        id_product: id_product,
        name: name,
        price: Number(price),
        number: Number(number),
        description: description,
        brand: brand
    };
    const addInventario = await addInventory(data)


    res.redirect('/')
})

router.post('/:id', async (req, res) => {
    const id = req.params.id;
    console.log('post1');
    console.log(id);
    const { id_product, name, price, number, description, brand } = req.body

    data = {
        id_product: id_product,
        name: name,
        price: Number(price),
        number: Number(number),
        description: description,
        brand: brand
    };
    const updateInventario = await updateInventory(data, id)

    res.redirect('/inventory')

});

module.exports = router
