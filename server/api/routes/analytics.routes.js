const express = require('express');
    const router = express.Router();
    const analyticsController = require('../controllers/analytics.controller');

    router.get('/portfolio/:userId', analyticsController.getPortfolioAnalytics);
    router.get('/risk/:portfolioId', analyticsController.getRiskMetrics);

    module.exports = router;
