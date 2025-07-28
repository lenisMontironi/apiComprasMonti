import { Router } from 'express';
import {
  getAllProviders,
  getProviderById,
  createProvider,
  updateProvider,
  deleteProvider,
} from '../controllers/provider.controller';
import validate from '../middlewares/validate';
import providerSchema from '../schemas/provider.schema';

const router = Router();

router.get('/', getAllProviders);
router.get('/:id', getProviderById);
router.post('/', validate(providerSchema), createProvider);
router.put('/:id', validate(providerSchema), updateProvider);
router.delete('/:id', deleteProvider);

export default router;
