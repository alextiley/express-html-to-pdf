import { handlePDF } from '../handlers/pdf';
import { HTMLToPDFOptions } from '../types';
import { RequestHandler } from 'express';

// Augment express response object to allow support for res.pdf()
declare global {
  namespace Express {
    interface Response {
      pdf: (html: string, options?: HTMLToPDFOptions) => Promise<this>
    }
  }
}

const middleware: RequestHandler = (req, res, next) => {
  res.pdf = handlePDF;
  next();
};

export default middleware;
