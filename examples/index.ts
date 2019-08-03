import express, { Express, Request, Response } from 'express';
import pdf from '../src';
import basicMarkup from '../src/__fixtures__/basic';
import googleWebFontMarkup from '../src/__fixtures__/webfont';
import complexMarkup from '../src/__fixtures__/complex';

const app: Express = express();

app.use(pdf);

app.get('/', (_req: Request, res: Response) => {
  res.send(`
    <html lang="en">
      <body>
        <h1>express-html-to-pdf</h1>
        <ul>
          <li><a href="/with-basic-html">Basic HTML example</a></li>
          <li><a href="/with-external-resources">Google Font Example (loading external resources)</a></li>
          <li><a href="/with-complex-html">Advanced HTML example (with Flexbox)</a></li>
        </ul>
      </body>
    </html>
  `);
});

app.get('/with-basic-html', (_req: Request, res: Response) => {
  res.pdf(basicMarkup);
});

app.get('/with-external-resources', (_req: Request, res: Response) => {
  res.pdf(googleWebFontMarkup, {
    waitForNetworkIdle: true,
  });
});

app.get('/with-complex-html', (_req: Request, res: Response) => {
  res.pdf(complexMarkup, {
    pdfOptions: {
      format: 'A2',
    },
    waitForNetworkIdle: true,
  });
});

app
  .listen(3000, () => {
    console.log(`> Ready on http://localhost:3000`);
  })
  .on('error', (err: Error) => {
    throw err;
  });
