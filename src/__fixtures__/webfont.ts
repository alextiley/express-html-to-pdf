export default `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" />
      <style>
        .typography__heading--main {
          font: 400 24px/1.5 'Fredericka the Great', cursive;
        }
        
        .typography__heading--sub {
          font: 400 18px/1.5 'Fredericka the Great', cursive;
        }
        
        .typography__copy {
          font: 400 12px/1.5 'Fredericka the Great', cursive;
        }
        
        .typography__copy--small {
          font: 400 9px/1.5 'Fredericka the Great', cursive;
        }
      </style>
    </head>
    <body>
      <h1 class="typography__heading--main">The quick brown fox jumps over the lazy dog.</h1>
      <h2 class="typography__heading--sub">The five boxing wizards jump quickly.</h2>
      <p class="typography__copy">The job requires extra pluck and zeal from every young wage earner.</p>
      <small class="typography__copy--small">Five quacking zephyrs jolt my wax bed.</small>
    </body>
  </html>
`;
