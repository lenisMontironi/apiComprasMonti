const express = require('express');
const router = express.Router();
const providerRoutes = require('./provider.routes');

router.use('/providers', providerRoutes);

module.exports = router;
