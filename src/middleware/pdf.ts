import { handlePDF } from '../handlers/pdf';

const middleware: ExpressHTMLToPDFMiddleware = (req, res, next) => {
  res.pdf = handlePDF;
  next();
};

export default middleware;
