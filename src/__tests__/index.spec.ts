import express from 'express';
import request from 'supertest';
import pdf from '../index';
import middleware from '../middleware/pdf';
import basic from '../__fixtures__/basic';
import * as helpers from '../helpers/pdf';

const createTestAppWithMiddleware = () => {
  const app = express();
  app.use(pdf);
  return app;
};

describe('express-html-to-pdf middleware', () => {
  it('should add a method to the response object allowing conversion of HTML to PDF', async () => {
    const app = createTestAppWithMiddleware();

    expect.assertions(1);

    app.get('/pdf', (req, res) => {
      expect(res.pdf).toEqual(middleware);
    });

    await request(app)
      .get('/pdf');
  });

  it('should send a PDF to the browser when response.pdf is invoked with basic HTML', async () => {
    const app = createTestAppWithMiddleware();

    app.get('/pdf', (req, res) => {
      res.pdf(basic);
    });

    await request(app)
      .get('/pdf')
      .expect('Content-Type', 'application/pdf');
  });

  it('should return a 200 status code for successful PDF requests', async () => {
    const app = createTestAppWithMiddleware();

    app.get('/pdf', (req, res) => {
      res.pdf(basic);
    });

    await request(app)
      .get('/pdf')
      .expect(200)
      .expect('Content-Type', 'application/pdf');
  });

  it('should render the PDF inline within the browser by default, rather than trigger a download', async () => {
    const app = createTestAppWithMiddleware();

    app.get('/pdf', (req, res) => {
      res.pdf(basic);
    });

    await request(app)
      .get('/pdf')
      .expect('Content-Disposition', /inline; filename="[A-Za-z0-9-_.]+"/);
  });

  it('should set the default filename to document.pdf', async () => {
    const app = createTestAppWithMiddleware();

    app.get('/pdf', (req, res) => {
      res.pdf(basic);
    });

    await request(app)
      .get('/pdf')
      .expect('Content-Disposition', /(inline|attachment); filename="document.pdf"/);
  });

  it.only('should return a 500 status code for unsuccessful PDF requests', async () => {
    const app = createTestAppWithMiddleware();

    // Make puppeteer throw when generating PDF
    jest.spyOn(helpers, 'asPDF').mockImplementation(() => {
      throw new Error('Some error occurred.');
    });

    app.get('/pdf', (req, res) => {
      res.pdf(basic);
    });

    await request(app)
      .get('/pdf')
      .expect(500);
  });
});
