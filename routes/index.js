const router = require('express').Router();
const apiRoutes = require('./API');

// Use /api prefix for all API routes
router.use('/api', apiRoutes);

module.exports = router;