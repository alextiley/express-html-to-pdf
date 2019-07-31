import pdf from './middleware/pdf';
import { ExpressPDFOptions } from './types';

declare global {
  namespace Express {
    export interface Response {
      pdf: (html: string, options?: ExpressPDFOptions) => void;
    }
  }
}

export default pdf;
