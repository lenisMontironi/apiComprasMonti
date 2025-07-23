const express = require('express');
const router = express.Router();
const {
  getAllProviders,
  getProviderById,
  createProvider,
  updateProvider,
  deleteProvider,
} = require('../controllers/provider.controller');

const validate = require('../middlewares/validate');
const providerSchema = require('../schemas/provider.schema');

router.get('/', getAllProviders);
router.get('/:id', getProviderById);
router.post('/', validate(providerSchema), createProvider);
router.put('/:id', validate(providerSchema), updateProvider);
router.delete('/:id', deleteProvider);

module.exports = router;


