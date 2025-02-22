const express = require('express');
    const router = express.Router();
    const tradfiController = require('../controllers/tradfi.controller');

    router.get('/stocks', tradfiController.getStocks);
    router.get('/bonds', tradfiController.getBonds);

    module.exports = router;
