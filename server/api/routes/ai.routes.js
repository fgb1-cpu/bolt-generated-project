const express = require('express');
    const router = express.Router();
    const aiController = require('../controllers/ai.controller');

    router.get('/predictions', aiController.getPredictions);
    router.post('/train', aiController.trainModel);

    module.exports = router;
