import { Router } from 'express';
import providerRoutes from './provider.routes';
import areaRoutes from './area.routes';

const router = Router();

router.use('/providers', providerRoutes);
router.use('/areas', areaRoutes);

export default router;
