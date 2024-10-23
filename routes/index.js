const router = require('express').Router();
const htmlRoutes = require('./html/index');
const apiRoutes =require('./API/index');

router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

module.exports = router;

