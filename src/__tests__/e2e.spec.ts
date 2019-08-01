import express from 'express';
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

  it('should send a PDF to the browser when response.pdf is invoked with basic HTML', async () => {
    app.get('/pdf', (req, res) => {
      res.pdf(basicMarkup);
    });

    const { body }: PDFResponse = await request(app)
      .get('/pdf')
      .expect('Content-Type', 'application/pdf');

    expect(body).toBeInstanceOf(Buffer);
  }, 20000);

  it('should send a PDF to the browser when response.pdf is invoked with HTML and CSS that requires assets over the network', async () => {
    app.get('/pdf', (req, res) => {
      res.pdf(googleWebFontMarkup, {
        waitForNetworkIdle: true,
      });
    });

    const { body }: PDFResponse = await request(app)
      .get('/pdf')
      .expect('Content-Type', 'application/pdf');

    expect(body).toBeInstanceOf(Buffer);
  }, 20000);

  it('should send a PDF to the browser when response.pdf is invoked with complex HTML and CSS', async () => {
    app.get('/pdf', (req, res) => {
      res.pdf(complexMarkup);
    });

    const { body }: PDFResponse = await request(app)
      .get('/pdf')
      .expect('Content-Type', 'application/pdf');

    expect(body).toBeInstanceOf(Buffer);
  }, 20000);
});
