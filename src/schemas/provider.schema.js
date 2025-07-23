const { z } = require('zod');

const createProviderSchema = z.object({
  description: z.string().min(1, 'Description is required'),
  phones: z.string().min(5, 'Phone number is required'),
  address: z.string().min(1, 'Address is required'),
});


module.exports = providerSchema;
