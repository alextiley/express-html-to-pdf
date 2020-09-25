import { Response } from 'express';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import { HTMLToPDFOptions } from '../types';
import debug from '../helpers/debug';
import HTMLToPDF from 'convert-html-to-pdf';

const defaultOptions: HTMLToPDFOptions = {
  browserOptions: {
    args: ['--font-render-hinting=none','--no-sandbox'],
  },
  disposition: 'inline',
  errorBody: 'Unable to generate PDF',
  filename: 'document.pdf',
  pdfOptions: {
    printBackground: true,
  },
  waitForNetworkIdle: false,
};

export async function handlePDF(
  this: Response,
  html: string,
  userOptions: HTMLToPDFOptions = {}
): Promise<Response> {
  const options = defaultsDeep(defaultOptions, userOptions);

  debug('Configuration successfully parsed:');
  debug('%O', options);

  try {
    const pdf = await new HTMLToPDF(html, options).convert();

    debug(`${options.filename} successfully generated.`);

    return this
      .set({
        'Content-Disposition': `${options.disposition}; filename="${options.filename}"`,
        'Content-Type': 'application/pdf',
      })
      .status(200)
      .send(pdf);

  } catch (err) {
    debug('Failed to respond with a PDF document: %O', err);

    return this
      .status(500)
      .send(options.errorBody);
  }
}
