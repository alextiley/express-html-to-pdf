import puppeteer from 'puppeteer';
import { asDataUri } from './encode';
import { ExpressPDFOptions } from '../types';

export const asPDF = async (html: string, options: ExpressPDFOptions) => {
  let pdf: Buffer;

  const browser = await puppeteer.launch(options.browserOptions);
  const page = await browser.newPage();

  if (options.waitForNetworkIdle) {
    await page.goto(asDataUri(html), { waitUntil: 'networkidle0' });
  } else {
    await page.setContent(html);
  }

  try {
    pdf = await page.pdf(options.pdfOptions);
  } catch (err) {
    await browser.close();
    throw new Error(`Error whilst generating PDF: ${err.message}`);
  }

  await browser.close();

  return pdf;
};
