import puppeteer from 'puppeteer';
import { asDataUri } from './encode';

export const generatePDF = async (html: string, options: ExpressPDFOptions): Promise<Buffer> => {
  return new Promise(async (res, rej) => {
    const browser = await puppeteer.launch(options.browserOptions);
    const page = await browser.newPage();

    page.on('error', async (err) => {
      await browser.close();
      rej(err);
    });

    if (options.waitForNetworkIdle) {
      await page.goto(asDataUri(html), { waitUntil: 'networkidle0' });
    } else {
      await page.setContent(html);
    }

    try {
      const pdf = await page.pdf(options.pdfOptions);
      await browser.close();
      res(pdf);
    } catch (err) {
      await browser.close();
      rej(new Error(`Error whilst generating PDF: ${err.message}`));
    }
  });
};
