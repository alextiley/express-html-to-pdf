import { NextFunction, Request, Response } from 'express';
import { handlePDF } from '../handlers/pdf';

export default (req: Request, res: Response, next: NextFunction): void => {
  res.pdf = handlePDF;
  next();
};
