interface ExpressPDFOptions {
  disposition?: 'inline' | 'attachment';
  filename?: string;
  browserOptions?: import('puppeteer').LaunchOptions;
  errorBody?: any;
  pdfOptions?: import('puppeteer').PDFOptions;
  waitForNetworkIdle?: boolean;
}

declare module 'express-html-to-pdf' {
  global {
    namespace Express {
      interface Response {
        pdf: (html: string, options?: ExpressPDFOptions) => Promise<this>;
      }
    }
  }
}
