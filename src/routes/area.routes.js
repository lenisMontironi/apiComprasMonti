const express = require('express');
const router = express.Router();

const {
  getAllAreas,
  getAreaById,
  createArea,
  updateArea,
  deleteArea,
} = require('../controllers/areaController');

const validate = require('../middlewares/validate');
const areaSchema = require('../schemas/area.schema');

router.get('/', getAllAreas);
router.get('/:id', getAreaById);
router.post('/', validate(areaSchema), createArea);
router.put('/:id', validate(areaSchema), updateArea);
router.delete('/:id', deleteArea);

module.exports = router;

