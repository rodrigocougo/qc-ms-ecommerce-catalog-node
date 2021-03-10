const express = require('express');
const CatalogController = require('../controllers/catalogController'); 

const router = express.Router();

router.get('/', CatalogController.getAllCatalogController);                // - OK
router.get('/:id', CatalogController.getCatalogController);                // - OK
router.post('/', CatalogController.insertCatalogController);                // - OK
router.put('/:id', CatalogController.updateCatalogController);

module.exports = router;