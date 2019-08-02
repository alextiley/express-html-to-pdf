import pdf from './middleware/pdf';
import { ExpressPDFOptions } from './types';
import { LaunchOptions } from 'puppeteer';

// TODO Revisit these exports
declare global {
  namespace Express {
    export interface Response {
      pdf: (html: string, options?: ExpressPDFOptions) => void;
    }
  }
}

export { ChromeArgOptions, LaunchOptions, PDFOptions } from 'puppeteer';

export default pdf;
