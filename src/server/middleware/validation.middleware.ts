import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

const validateAsync = (schema: Schema) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  };
};

export default validateAsync