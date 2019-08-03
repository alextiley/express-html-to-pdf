import { handlePDF } from '../handlers/pdf';

// Augment express response object to allow support for res.pdf()
declare global {
  namespace Express {
    interface Response {
      pdf: (html: string, options?: HTMLToPDFOptions) => Promise<this>
    }
  }
}

const middleware: HTMLToPDFMiddleware = (req, res, next) => {
  res.pdf = handlePDF;
  next();
};

export default middleware;
