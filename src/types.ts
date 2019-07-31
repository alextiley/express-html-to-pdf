import { PDFOptions, LaunchOptions } from 'puppeteer';

export interface ExpressPDFOptions {
  disposition?: 'inline' | 'attachment';
  filename?: string;
  browserOptions?: LaunchOptions;
  errorBody?: any;
  pdfOptions?: PDFOptions;
  waitForNetworkIdle?: boolean;
}
