import express from 'express';
// @ts-ignore
import PDFParser from 'pdf2json';
import puppeteer from 'puppeteer';
import request from 'supertest';
import basicMarkup from '../__fixtures__/basic';
import complexMarkup from '../__fixtures__/complex';
import googleWebFontMarkup from '../__fixtures__/webfont';
import { ExpressPDFOptions } from '../types';

declare global {
  namespace Express {
    export interface Response {
      pdf: (html: string, options?: ExpressPDFOptions) => void;
    }
  }
}

type PDFResponse = {
  body: Buffer;
}

jest.dontMock('puppeteer');

describe('e2e tests', () => {
  let app = express();

  beforeEach(() => {
    const pdf = require('../index').default;
    app = express();
    app.use(pdf);
  });

  it('should send a PDF to the browser when response.pdf is invoked with basic HTML', async (done) => {
    expect.assertions(5);

    app.get('/pdf', (req, res) => {
      res.pdf(basicMarkup);
    });

    const { body }: PDFResponse = await request(app)
      .get('/pdf');

    expect(body).toBeInstanceOf(Buffer);

    const parser = new PDFParser();

    parser.parseBuffer(body);

    parser.on("pdfParser_dataReady", (data: any) => {
      // Assert there is only one page
      expect(data.formImage.Pages).toHaveLength(1);
      // Assert this is 1 block of text
      expect(data.formImage.Pages[0].Texts).toHaveLength(1);
      // Assert that no font face was embedded
      expect(data.formImage.Pages[0].Texts[0].R[0].TS[0]).toEqual(0);
      // Asset that the correct text is rendered
      expect(data.formImage.Pages[0].Texts[0].R[0].T).toEqual('Hello%20world');
      done();
    });
  }, 30000);

  it('should send a PDF to the browser when response.pdf is invoked with HTML and CSS that requires assets over the network', async (done) => {
    expect.assertions(11);

    app.get('/pdf', (req, res) => {
      res.pdf(googleWebFontMarkup, {
        waitForNetworkIdle: true,
      });
    });

    const { body }: PDFResponse = await request(app)
      .get('/pdf');

    expect(body).toBeInstanceOf(Buffer);

    const parser = new PDFParser();

    parser.parseBuffer(body);

    parser.on("pdfParser_dataReady", (data: any) => {
      // Assert there is only one page
      expect(data.formImage.Pages).toHaveLength(1);
      // Assert there are 4 blocks of text
      expect(data.formImage.Pages[0].Texts).toHaveLength(4);
      // Assert that a custom font face is used
      expect(data.formImage.Pages[0].Texts[0].R[0].TS[0]).not.toEqual(0);
      expect(data.formImage.Pages[0].Texts[1].R[0].TS[0]).not.toEqual(0);
      expect(data.formImage.Pages[0].Texts[2].R[0].TS[0]).not.toEqual(0);
      expect(data.formImage.Pages[0].Texts[3].R[0].TS[0]).not.toEqual(0);
      // Assert that the correct text is rendered
      expect(data.formImage.Pages[0].Texts[0].R[0].T).toEqual('The%20quick%20brown%20fox%20jumps%20over%20the%20lazy%20dog.');
      expect(data.formImage.Pages[0].Texts[1].R[0].T).toEqual('The%20five%20boxing%20wizards%20jump%20quickly.');
      expect(data.formImage.Pages[0].Texts[2].R[0].T).toEqual('The%20job%20requires%20extra%20pluck%20and%20zeal%20from%20every%20young%20wage%20earner.');
      expect(data.formImage.Pages[0].Texts[3].R[0].T).toEqual('Five%20quacking%20zephyrs%20jolt%20my%20wax%20bed.');
      done();
    });
  }, 30000);

  it('should send a PDF to the browser when response.pdf is invoked with complex HTML and CSS', async (done) => {
    expect.assertions(3);

    app.get('/pdf', (req, res) => {
      res.pdf(complexMarkup);
    });

    const { body }: PDFResponse = await request(app)
      .get('/pdf');

    expect(body).toBeInstanceOf(Buffer);

    const parser = new PDFParser();

    parser.parseBuffer(body);

    parser.on("pdfParser_dataReady", (data: any) => {
      expect(data.formImage.Pages.length).toBeGreaterThan(1);
      expect(data.formImage.Pages[0].Texts.length).toBeGreaterThan(1);
      done();
    });
  }, 30000);
});
