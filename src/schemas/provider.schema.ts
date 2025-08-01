import { z } from 'zod';

const providerSchema = z.object({
  description: z.string().min(1, { message: 'Description is required' }),
  phones: z.string().min(5, { message: 'Phone number is required' }),
  address: z.string().min(1, { message: 'Address is required' }),
  name: z.string().min(1, { message: 'name is required' }),
  cuil: z.string().min(1, { message: 'cuil is required' }),
});

export default providerSchema;


