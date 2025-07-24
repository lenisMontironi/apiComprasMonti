const express = require('express');
const router = express.Router();
const providerRoutes = require('./provider.routes');
const areaRoutes = require('./area.routes');

router.use('/providers', providerRoutes);
router.use('/areas', areaRoutes);

module.exports = router;
