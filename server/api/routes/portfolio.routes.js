const express = require('express');
    const router = express.Router();
    const portfolioController = require('../controllers/portfolio.controller');

    router.get('/:userId', portfolioController.getPortfolio);
    router.post('/:userId', portfolioController.createPortfolio);
    router.put('/:id', portfolioController.updatePortfolio);
    router.delete('/:id', portfolioController.deletePortfolio);

    module.exports = router;
