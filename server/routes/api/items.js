const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// Get Items
router.get('/', async (req, res) => {
    const items = await loadItemsCollections();
    res.send(await items.find({}).toArray());
});

// Add Items
router.post('/', async (req, res) => {
    const items = await loadItemsCollections();
    await items.insertOne({
        text: req.body.text,
        dueDate: req.body.dueDate
    });
    res.status(201).send();
});

// Delete Items

router.delete('/:id', async (req, res) => {
    const items = await loadItemsCollections();
    await items.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
});

async function loadItemsCollections() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://dhana:wachuset55@cluster0-gbcxp.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });

    return client.db('vue-todo').collection('items');
}

module.exports = router;