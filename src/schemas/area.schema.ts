import { z } from 'zod';

const areaSchema = z.object({
  id_sucursales: z.number().refine(val => val !== undefined, {
    message: 'Sucursal ID is required',
  }),
  descripcion: z.string().min(1, { message: 'Description is required' }),
});

export default areaSchema;

