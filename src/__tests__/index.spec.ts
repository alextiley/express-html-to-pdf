import express from 'express';
import request from 'supertest';
import pdf from '../index';
import basic from '../__fixtures__/basic';
import middleware from '../middleware/pdf';
import { page, puppeteer } from '../__mocks__/puppeteer';

const createTestAppWithMiddleware = () => {
  const app = express();
  app.use(pdf);
  return app;
};

describe('express-html-to-pdf middleware', () => {
  describe('PDF generation', () => {
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
  });

  describe('configuration', () => {
    it('should render the PDF inline within the browser by default, rather than trigger a download', async () => {
      const app = createTestAppWithMiddleware();

      app.get('/pdf', (req, res) => {
        res.pdf(basic);
      });

      await request(app)
        .get('/pdf')
        .expect('Content-Disposition', /inline; filename="[A-Za-z0-9-_.]+"/);
    });

    it('should support downloading the PDF as an attachment, via configuration', async () => {
      const app = createTestAppWithMiddleware();

      app.get('/pdf', (req, res) => {
        res.pdf(basic, {
          disposition: 'attachment',
        });
      });

      await request(app)
        .get('/pdf')
        .expect('Content-Disposition', /attachment; filename="[A-Za-z0-9-_.]+"/);
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

    it('should support custom filenames, via configuration', async () => {
      const app = createTestAppWithMiddleware();

      app.get('/pdf', (req, res) => {
        res.pdf(basic, {
          filename: 'My-file.pdf',
        });
      });

      await request(app)
        .get('/pdf')
        .expect('Content-Disposition', /(inline|attachment); filename="My-file.pdf"/);
    });

    it('should disable font render hinting by default, to ensure fonts render reliably across all platforms', async () => {
      const app = createTestAppWithMiddleware();

      expect.assertions(1);

      app.get('/pdf', (req, res) => {
        res.pdf(basic);

        expect(puppeteer.launch).toHaveBeenCalledWith(expect.objectContaining({
          args: ['--font-render-hinting=none'],
        }));
      });

      await request(app)
        .get('/pdf');
    });

    it('should allow font render hinting to be enabled via browser configuration', async () => {
      const app = createTestAppWithMiddleware();

      expect.assertions(1);

      app.get('/pdf', (req, res) => {
        res.pdf(basic, {
          browserOptions: {
            args: [],
          },
        });

        expect(puppeteer.launch).toHaveBeenCalledWith(expect.objectContaining({
          args: [],
        }));
      });

      await request(app)
        .get('/pdf');
    });

    it('should support custom browser settings, via configuration', async () => {
      const app = createTestAppWithMiddleware();

      expect.assertions(1);

      app.get('/pdf', (req, res) => {
        res.pdf(basic, {
          browserOptions: {
            timeout: 5000,
          },
        });

        expect(puppeteer.launch).toHaveBeenCalledWith(expect.objectContaining({
          timeout: 5000,
        }));
      });

      await request(app)
        .get('/pdf');
    });

    it('should ensure custom browser options play well with default browser options', async () => {
      const app = createTestAppWithMiddleware();

      expect.assertions(1);

      app.get('/pdf', (req, res) => {
        res.pdf(basic, {
          browserOptions: {
            timeout: 9999,
          }
        });

        expect(puppeteer.launch).toHaveBeenCalledWith(expect.objectContaining({
          args: ['--font-render-hinting=none'],
          timeout: 9999,
        }));
      });

      await request(app)
        .get('/pdf');
    });

    it('should support a custom error response body in the event of failure', async () => {
      const app = createTestAppWithMiddleware();

      page.pdf.mockImplementation(() => {
        throw new Error('Could not generate PDF from puppeteer.');
      });

      app.get('/pdf', (req, res) => {
        res.pdf(basic, {
          errorBody: {
            error: 'Some custom error body',
          }
        });
      });

      await request(app)
        .get('/pdf')
        .expect({
          error: 'Some custom error body',
        });
    });
  });

  describe('error handling', () => {
    it('should return a 500 status code if the browser crashes', async () => {
      const app = createTestAppWithMiddleware();

      page.on.mockImplementation((_event, callback) => {
        callback(new Error('Page crashed!'));
      });

      app.get('/pdf', (req, res) => {
        res.pdf(basic);
      });

      await request(app)
        .get('/pdf')
        .expect(500);
    });

    it('should return a 500 status code if the browser fails to generate a PDF', async () => {
      const app = createTestAppWithMiddleware();

      page.pdf.mockImplementation(() => {
        throw new Error('Could not generate PDF from puppeteer.');
      });

      app.get('/pdf', (req, res) => {
        res.pdf(basic);
      });

      await request(app)
        .get('/pdf')
        .expect(500);
    });

    it('should return the default error response body "Unable to generate PDF"', async () => {
      const app = createTestAppWithMiddleware();

      page.pdf.mockImplementation(() => {
        throw new Error('Could not generate PDF from puppeteer.');
      });

      app.get('/pdf', (req, res) => {
        res.pdf(basic);
      });

      await request(app)
        .get('/pdf')
        .expect('Unable to generate PDF');
    });
  });
});
