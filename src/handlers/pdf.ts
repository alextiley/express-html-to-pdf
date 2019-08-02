import { Response } from 'express';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import { generatePDF } from '../helpers/pdf';
import debug from '../helpers/debug';

const defaultOptions: ExpressPDFOptions = {
  browserOptions: {
    args: ['--font-render-hinting=none'],
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
  userOptions: ExpressPDFOptions = {}
) {
  const options = defaultsDeep(defaultOptions, userOptions);

  debug('Configuration successfully parsed:');
  debug('%O', options);

  try {
    const pdf = await generatePDF(html, options);

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
