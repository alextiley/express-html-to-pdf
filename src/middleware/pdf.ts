import { NextFunction, Request, Response } from 'express';
import { handlePDF } from '../handlers/pdf';

export default async (req: Request, res: Response, next: NextFunction) => {
  res.pdf = await handlePDF;
  next();
};
