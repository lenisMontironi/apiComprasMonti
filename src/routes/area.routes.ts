import { Router } from 'express';
import {
  getAllAreas,
  getAreaById,
  createArea,
  updateArea,
  deleteArea,
} from '../controllers/areaController';
import validate from '../middlewares/validate';
import areaSchema from '../schemas/area.schema';

const router = Router();

router.get('/', getAllAreas);
router.get('/:id', getAreaById);
router.post('/', validate(areaSchema), createArea);
router.put('/:id', validate(areaSchema), updateArea);
router.delete('/:id', deleteArea);

export default router;
