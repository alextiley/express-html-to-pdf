# express-html-to-pdf

Adds support for converting HTML to PDF via express.js.

### Features

* Converts HTML to PDF by exposing a handy `pdf` method on the Express Response object.
* Uses Puppeteer under the hood to generate PDF documents. Puppeteer options are exposed through configuration.
* Automatically configured to avoid font rendering issues in Linux environments. Great for containerised environments running in docker.

### Dependencies

This library uses Puppeteer to generate PDF's. 

Some systems may work out of the box, others may not. To allow Puppeteer to spin up correctly, you may need to install some additional system dependencies.

For pointers on how to make puppeteer work in your environment, see https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#running-puppeteer-in-docker

### Basic usage

At the most basic, this library adds a `pdf` method to the express response object. When invoked with a valid HTML template as the first argument, a Buffer is returned containing a PDF document, along with the `application/pdf` mime type.

 ```typescript
  import express, { Express } from 'express';

  const app: Express = express();

  app.get('/some/pdf', (req: Request, res: Response) => {
    res.pdf(`
       <div>Hello world</div>
    `);
  });

  app.listen(3000);
```

### Configuration

| property | type | description |
|----------|--------|-----------|
| disposition | 'inline' / 'attachment' | Should the file render inline within the browser or download as an attachment? |
| filename | string | The filename for the generated file (including extension). |
| browserOptions | LaunchOptions | The Puppeteer launch option configuration. See https://pptr.dev/#?product=Puppeteer&version=v1.19.0&show=api-puppeteerlaunchoptions for a full list. |
| errorBody | any | The value to return whenever a 500 error occurs (PDF fails to generate). This can be a string, JSON, etc. |
| waitForNetworkIdle | boolean | By default, we assume the PDF document supplied will not contain requests over HTTP (for fastest possible PDF generation). Typically you can embed resources by base64 encoding as data URI's. If you have HTML that pulls assets or other resources over HTTP, set this to `true`. |

### Example Dockerfile 

If you're using this in a production Debian environment (e.g. Docker), here's an extract from a Dockerfile with the necessary dependencies needed to get up and running.

```Dockerfile
  FROM node:10.15.3-slim
  
  RUN apt-get update \
    && apt-get install -y --no-install-recommends gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 \
       libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 \
       libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxi6 libxrandr2 libxrender1 \
       libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libxft-dev libfreetype6 \
    && rm -rf /var/lib/apt/lists/*
```
