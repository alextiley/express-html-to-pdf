import { LaunchOptions, PDFOptions } from 'puppeteer';

export interface HTMLToPDFOptions {
  disposition?: 'inline' | 'attachment';
  filename?: string;
  browserOptions?: LaunchOptions;
  errorBody?: any;
  pdfOptions?: PDFOptions;
  waitForNetworkIdle?: boolean;
}
