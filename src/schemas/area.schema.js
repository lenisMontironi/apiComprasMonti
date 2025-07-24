const { z } = require('zod');

const areaSchema = z.object({
  id_sucursales: z.number({
    required_error: 'Sucursal ID is required',
    invalid_type_error: 'Sucursal ID must be a number',
  }),
  descripcion: z.string().min(1, 'Description is required'),
});

module.exports = areaSchema;
