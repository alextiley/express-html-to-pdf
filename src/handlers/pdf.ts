import debug from 'debug';
import { Response } from 'express';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import { ExpressPDFOptions } from '../types';
import { asPDF } from '../helpers/pdf';

const defaultOptions: ExpressPDFOptions = {
  browserOptions: {
    args: ['--font-render-hinting=none'],
  },
  disableSandbox: false,
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
  userOptions: ExpressPDFOptions = {}
) {
  const options = defaultsDeep(defaultOptions, userOptions);

  try {
    const pdf = await asPDF(html, options);

    this
      .set({
        'Content-Disposition': `${options.disposition}; filename="${options.filename}"`,
        'Content-Type': 'application/pdf',
      })
      .status(200)
      .send(pdf);

  } catch (err) {
    debug(err.message);

    this
      .status(500)
      .send(options.errorBody);
  }
}
