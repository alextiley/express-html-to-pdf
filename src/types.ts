import { PDFOptions, LaunchOptions } from 'puppeteer';

export interface ExpressPDFOptions {
  disposition?: 'inline' | 'attachment';
  filename?: string;
  browserOptions?: LaunchOptions;
  errorBody?: any;
  pdfOptions?: PDFOptions;
  waitForNetworkIdle?: boolean;
}

declare global {
  namespace Express {
    interface Response {
      pdf: (html: string, options?: ExpressPDFOptions) => void;
    }
  }
}
