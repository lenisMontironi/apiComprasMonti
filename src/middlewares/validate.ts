import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

const validate = (schema: ZodSchema) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error: any) {
    return res.status(400).json({
      message: 'Validation error',
      errors: error.errors?.map((err: any) => err.message) || ['Unknown error'],
    });
  }
};

export default validate;
