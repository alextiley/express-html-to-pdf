interface HTMLToPDFOptions {
  disposition?: 'inline' | 'attachment';
  filename?: string;
  browserOptions?: import('puppeteer').LaunchOptions;
  errorBody?: any;
  pdfOptions?: import('puppeteer').PDFOptions;
  waitForNetworkIdle?: boolean;
}

type HTMLToPDFMiddleware = (
  request: import('express').Request,
  response: import('express').Response,
  next: import('express').NextFunction
) => void;
