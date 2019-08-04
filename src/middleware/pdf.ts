import { handlePDF } from '../handlers/pdf';
import { RequestHandler } from 'express';

const middleware: RequestHandler = (req, res, next) => {
  res.pdf = handlePDF;
  next();
};

export default middleware;
