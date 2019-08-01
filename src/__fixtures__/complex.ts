export default `
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="icon" href="https://reactjs.org/favicon.ico">
          <style data-href="/app.64fe9c0628e7b00c85f9.css">
              /*! normalize.css v8.0.0 | MIT License | github.com/necolas/normalize.css */
              html {line-height: 1.15;-webkit-text-size-adjust: 100%}
              body {margin: 0}
              h1 {font-size: 2em;margin: .67em 0}
              hr {box-sizing: content-box;height: 0;overflow: visible}
              pre {font-family: monospace, monospace;font-size: 1em}
              a {background-color: transparent}
              abbr[title] {border-bottom: none;text-decoration: underline;-webkit-text-decoration: underline dotted;text-decoration: underline dotted}
              b, strong {font-weight: bolder}
              code, kbd, samp {font-family: monospace, monospace;font-size: 1em}
              small {font-size: 80%}
              sub, sup {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline}
              sub {bottom: -.25em}
              sup {top: -.5em}
              img {border-style: none}
              button, input, optgroup, select, textarea {font-family: inherit;font-size: 100%;line-height: 1.15;margin: 0}
              button, input {overflow: visible}
              button, select {text-transform: none}
              [type=button], [type=reset], [type=submit], button {-webkit-appearance: button}
              [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner, button::-moz-focus-inner {border-style: none;padding: 0}
              [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring, button:-moz-focusring {outline: 1px dotted ButtonText}
              fieldset {padding: .35em .75em .625em}
              legend {box-sizing: border-box;color: inherit;display: table;max-width: 100%;padding: 0;white-space: normal}
              progress {vertical-align: baseline}
              textarea {overflow: auto}
              [type=checkbox], [type=radio] {box-sizing: border-box;padding: 0}
              [type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button {height: auto}
              [type=search] {-webkit-appearance: textfield;outline-offset: -2px}
              [type=search]::-webkit-search-decoration {-webkit-appearance: none}
              ::-webkit-file-upload-button {-webkit-appearance: button;font: inherit}
              details {display: block}
              summary {display: list-item}
              [hidden], template {display: none}
              html {box-sizing: border-box;font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;font-weight: 400;font-style: normal;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale}
              body {overflow-x: hidden;position: relative}
              * {margin: 0;padding: 0}
              *, :after, :before {box-sizing: inherit}
              a {color: inherit;text-decoration: none}
              ol, ul {list-style: none}
              img {display: inline-block;vertical-align: top}
              code, pre {font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace}
              .searchbox {display: inline-block;position: relative;width: 200px;height: 32px !important;white-space: nowrap;box-sizing: border-box;visibility: visible !important}
              .searchbox .algolia-autocomplete {display: block;width: 100%;height: 100%}
              .searchbox__wrapper {width: 100%;height: 100%;z-index: 999;position: relative}
              .searchbox__input {display: inline-block;box-sizing: border-box;transition: box-shadow .4s ease, background .4s ease;border: 0;border-radius: 16px;box-shadow: inset 0 0 0 1px #ccc;background: #fff !important;padding: 0 26px 0 32px;width: 100%;height: 100%;vertical-align: middle;white-space: normal;font-size: 12px;-webkit-appearance: none;-moz-appearance: none;appearance: none}
              .searchbox__input::-webkit-search-cancel-button, .searchbox__input::-webkit-search-decoration, .searchbox__input::-webkit-search-results-button, .searchbox__input::-webkit-search-results-decoration {display: none}
              .searchbox__input:hover {box-shadow: inset 0 0 0 1px #b3b3b3}
              .searchbox__input:active, .searchbox__input:focus {outline: 0;box-shadow: inset 0 0 0 1px #aaa;background: #fff}
              .searchbox__input::-webkit-input-placeholder {color: #aaa}
              .searchbox__input:-ms-input-placeholder {color: #aaa}
              .searchbox__input::-ms-input-placeholder {color: #aaa}
              .searchbox__input::placeholder {color: #aaa}
              .searchbox__submit {position: absolute;top: 0;margin: 0;border: 0;border-radius: 16px 0 0 16px;background-color: rgba(69, 142, 225, 0);padding: 0;width: 32px;height: 100%;vertical-align: middle;text-align: center;font-size: inherit;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;right: inherit;left: 0}
              .searchbox__submit:before {display: inline-block;margin-right: -4px;height: 100%;vertical-align: middle;content: ""}
              .searchbox__submit:active, .searchbox__submit:hover {cursor: pointer}
              .searchbox__submit:focus {outline: 0}
              .searchbox__submit svg {width: 14px;height: 14px;vertical-align: middle;fill: #6d7e96}
              .searchbox__reset {display: block;position: absolute;top: 8px;right: 8px;margin: 0;border: 0;background: none;cursor: pointer;padding: 0;font-size: inherit;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;fill: rgba(0, 0, 0, .5)}
              .searchbox__reset.hide {display: none}
              .searchbox__reset:focus {outline: 0}
              .searchbox__reset svg {display: block;margin: 4px;width: 8px;height: 8px}
              .searchbox__input:valid ~ .searchbox__reset {display: block;-webkit-animation-name: sbx-reset-in;animation-name: sbx-reset-in;-webkit-animation-duration: .15s;animation-duration: .15s}
              @-webkit-keyframes sbx-reset-in {
                  0% {-webkit-transform: translate3d(-20%, 0, 0);transform: translate3d(-20%, 0, 0);opacity: 0}
                  to {-webkit-transform: none;transform: none;opacity: 1}
              }
              @keyframes sbx-reset-in {
                  0% {-webkit-transform: translate3d(-20%, 0, 0);transform: translate3d(-20%, 0, 0);opacity: 0}
                  to {-webkit-transform: none;transform: none;opacity: 1}
              }
              .algolia-autocomplete .ds-dropdown-menu:before {display: block;position: absolute;content: "";width: 14px;height: 14px;background: #373940;z-index: 1000;top: -7px;border-top: 1px solid #373940;border-right: 1px solid #373940;-webkit-transform: rotate(-45deg);transform: rotate(-45deg);border-radius: 2px}
              .algolia-autocomplete .ds-dropdown-menu {box-shadow: 0 1px 0 0 rgba(0, 0, 0, .2), 0 2px 3px 0 rgba(0, 0, 0, .1)}
              @media (min-width: 601px) {
                  .algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu {right: 0 !important;left: inherit !important}
                  .algolia-autocomplete.algolia-autocomplete-right .ds-dropdown-menu:before {right: 48px}
                  .algolia-autocomplete .ds-dropdown-menu {top: -6px;border-radius: 4px;margin: 6px 0 0;padding: 0;text-align: left;height: auto;position: relative;background: transparent;border: none;z-index: 999;max-width: 600px;min-width: 500px}
              }
              @media (max-width: 600px) {
                  .algolia-autocomplete .ds-dropdown-menu {z-index: 100;position: fixed !important;top: 40px !important;left: auto !important;right: 1rem !important;width: 600px;max-width: calc(100% - 2rem);max-height: calc(100% - 5rem);display: block}
                  .algolia-autocomplete .ds-dropdown-menu:before {right: 6rem}
              }
              .algolia-autocomplete .ds-dropdown-menu .ds-suggestions {position: relative;z-index: 1000}
              .algolia-autocomplete .ds-dropdown-menu .ds-suggestion {cursor: pointer}
              .algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-] {position: relative;border-radius: 4px;overflow: auto;padding: 0}
              .algolia-autocomplete .ds-dropdown-menu * {box-sizing: border-box}
              .algolia-autocomplete .algolia-docsearch-suggestion {position: relative;padding: 0;overflow: hidden}
              .algolia-autocomplete .ds-cursor .algolia-docsearch-suggestion--wrapper {background: #f1f1f1;box-shadow: inset -2px 0 0 #61dafb}
              .algolia-autocomplete .algolia-docsearch-suggestion--highlight {background: #ffe564;padding: .1em .05em}
              .algolia-autocomplete .algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--category-header-lvl0 .algolia-docsearch-suggestion--highlight, .algolia-autocomplete .algolia-docsearch-suggestion--category-header .algolia-docsearch-suggestion--category-header-lvl1 .algolia-docsearch-suggestion--highlight {color: inherit;background: inherit}
              .algolia-autocomplete .algolia-docsearch-suggestion--text .algolia-docsearch-suggestion--highlight {padding: 0 0 1px;background: inherit;box-shadow: inset 0 -2px 0 0 rgba(69, 142, 225, .8);color: inherit}
              .algolia-autocomplete .algolia-docsearch-suggestion--content {display: block;float: right;width: 70%;position: relative;padding: 5.33333px 0 5.33333px 10.66667px;cursor: pointer}
              .algolia-autocomplete .algolia-docsearch-suggestion--content:before {content: "";position: absolute;display: block;top: 0;height: 100%;width: 1px;background: #ececec;left: -1px}
              .algolia-autocomplete .algolia-docsearch-suggestion--category-header {position: relative;display: none;font-size: 14px;letter-spacing: .08em;font-weight: 700;background-color: #373940;text-transform: uppercase;color: #fff;margin: 0;padding: 5px 8px}
              .algolia-autocomplete .algolia-docsearch-suggestion--wrapper {background-color: #fff;width: 100%;float: left;padding: 8px 0 0}
              .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column {float: left;width: 30%;display: none;text-align: right;position: relative;padding: 5.33333px 10.66667px;color: #777;font-size: .9em;word-wrap: break-word}
              .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column:before {content: "";position: absolute;display: block;top: 0;height: 100%;width: 1px;background: #ececec;right: 0}
              .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column .algolia-docsearch-suggestion--highlight {background-color: inherit;color: inherit}
              .algolia-autocomplete .algolia-docsearch-suggestion--subcategory-inline {display: none}
              .algolia-autocomplete .algolia-docsearch-suggestion--title {margin-bottom: 4px;color: #02060c;font-size: .9em;font-weight: 700}
              .algolia-autocomplete .algolia-docsearch-suggestion--text {display: block;line-height: 1.2em;font-size: .85em;color: #63676d;padding-right: 2px}
              .algolia-autocomplete .algolia-docsearch-suggestion--no-results {width: 100%;padding: 8px 0;text-align: center;font-size: 1.2em;background-color: #373940;margin-top: -8px}
              .algolia-autocomplete .algolia-docsearch-suggestion--no-results .algolia-docsearch-suggestion--text {color: #fff;margin-top: 4px}
              .algolia-autocomplete .algolia-docsearch-suggestion--no-results:before {display: none}
              .algolia-autocomplete .algolia-docsearch-suggestion code {padding: 1px 5px;font-size: 90%;border: none;color: #222;background-color: #ebebeb;border-radius: 3px;font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace}
              .algolia-autocomplete .algolia-docsearch-suggestion code .algolia-docsearch-suggestion--highlight {background: none}
              .algolia-autocomplete .algolia-docsearch-suggestion.algolia-docsearch-suggestion__main .algolia-docsearch-suggestion--category-header, .algolia-autocomplete .algolia-docsearch-suggestion.algolia-docsearch-suggestion__secondary .algolia-docsearch-suggestion--subcategory-column {display: block}
              .algolia-autocomplete .algolia-docsearch-footer {background-color: #fff;width: 100%;height: 30px;z-index: 2000;float: right;font-size: 0;line-height: 0}
              .algolia-autocomplete .algolia-docsearch-footer--logo {background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 18"><defs><linearGradient id="a" x1="-36.87%" x2="129.43%" y1="134.94%" y2="-27.7%"><stop stop-color="%2300AEFF" offset="0%"/><stop stop-color="%233369E7" offset="100%"/></linearGradient></defs><g fill="none" fill-rule="evenodd"><path fill="url(%23a)" d="M59.4.02h13.3a2.37 2.37 0 0 1 2.38 2.37V15.6a2.37 2.37 0 0 1-2.38 2.36H59.4a2.37 2.37 0 0 1-2.38-2.36V2.38A2.37 2.37 0 0 1 59.4.02z"/><path fill="%23FFF" d="M66.26 4.56c-2.82 0-5.1 2.27-5.1 5.08 0 2.8 2.28 5.07 5.1 5.07 2.8 0 5.1-2.26 5.1-5.07 0-2.8-2.28-5.07-5.1-5.07zm0 8.65c-2 0-3.6-1.6-3.6-3.56 0-1.97 1.6-3.58 3.6-3.58 1.98 0 3.6 1.6 3.6 3.58a3.58 3.58 0 0 1-3.6 3.57zm0-6.4v2.66c0 .07.08.13.15.1l2.4-1.24c.04-.02.06-.1.03-.14a2.96 2.96 0 0 0-2.46-1.5c-.06 0-.1.05-.1.1zm-3.33-1.96l-.3-.3a.78.78 0 0 0-1.12 0l-.36.36a.77.77 0 0 0 0 1.1l.3.3c.05.05.13.04.17 0 .2-.25.4-.5.6-.7.23-.23.46-.43.7-.6.07-.04.07-.1.03-.16zm5-.8V3.4a.78.78 0 0 0-.78-.78h-1.83a.78.78 0 0 0-.78.78v.63c0 .07.06.12.14.1a5.74 5.74 0 0 1 1.58-.22c.52 0 1.04.07 1.54.2a.1.1 0 0 0 .13-.1z"/><path fill="%23182359" d="M102.16 13.76c0 1.46-.37 2.52-1.12 3.2-.75.67-1.9 1-3.44 1-.56 0-1.74-.1-2.67-.3l.34-1.7c.78.17 1.82.2 2.36.2.86 0 1.48-.16 1.84-.5.37-.36.55-.88.55-1.57v-.35a6.37 6.37 0 0 1-.84.3 4.15 4.15 0 0 1-1.2.17 4.5 4.5 0 0 1-1.6-.28 3.38 3.38 0 0 1-1.26-.82 3.74 3.74 0 0 1-.8-1.35c-.2-.54-.3-1.5-.3-2.2 0-.67.1-1.5.3-2.06a3.92 3.92 0 0 1 .9-1.43 4.12 4.12 0 0 1 1.45-.92 5.3 5.3 0 0 1 1.94-.37c.7 0 1.35.1 1.97.2a15.86 15.86 0 0 1 1.6.33v8.46zm-5.95-4.2c0 .9.2 1.88.6 2.3.4.4.9.62 1.53.62.34 0 .66-.05.96-.15a2.75 2.75 0 0 0 .73-.33V6.7a8.53 8.53 0 0 0-1.42-.17c-.76-.02-1.36.3-1.77.8-.4.5-.62 1.4-.62 2.23zm16.13 0c0 .72-.1 1.26-.32 1.85a4.4 4.4 0 0 1-.9 1.53c-.38.42-.85.75-1.4.98-.54.24-1.4.37-1.8.37-.43 0-1.27-.13-1.8-.36a4.1 4.1 0 0 1-1.4-.97 4.5 4.5 0 0 1-.92-1.52 5.04 5.04 0 0 1-.33-1.84c0-.72.1-1.4.32-2 .22-.6.53-1.1.92-1.5.4-.43.86-.75 1.4-.98a4.55 4.55 0 0 1 1.78-.34 4.7 4.7 0 0 1 1.8.34c.54.23 1 .55 1.4.97.38.42.68.92.9 1.5.23.6.35 1.3.35 2zm-2.2 0c0-.92-.2-1.7-.6-2.22-.38-.54-.94-.8-1.64-.8-.72 0-1.27.26-1.67.8-.4.54-.58 1.3-.58 2.22 0 .93.2 1.56.6 2.1.38.54.94.8 1.64.8s1.25-.26 1.65-.8c.4-.55.6-1.17.6-2.1zm6.97 4.7c-3.5.02-3.5-2.8-3.5-3.27L113.57.92l2.15-.34v10c0 .25 0 1.87 1.37 1.88v1.8zm3.77 0h-2.15v-9.2l2.15-.33v9.54zM119.8 3.74c.7 0 1.3-.58 1.3-1.3 0-.7-.58-1.3-1.3-1.3-.73 0-1.3.6-1.3 1.3 0 .72.58 1.3 1.3 1.3zm6.43 1c.7 0 1.3.1 1.78.27.5.18.88.42 1.17.73.28.3.5.74.6 1.18.13.46.2.95.2 1.5v5.47a25.24 25.24 0 0 1-1.5.25c-.67.1-1.42.15-2.25.15a6.83 6.83 0 0 1-1.52-.16 3.2 3.2 0 0 1-1.18-.5 2.46 2.46 0 0 1-.76-.9c-.18-.37-.27-.9-.27-1.44 0-.52.1-.85.3-1.2.2-.37.48-.67.83-.9a3.6 3.6 0 0 1 1.23-.5 7.07 7.07 0 0 1 2.2-.1l.83.16v-.35c0-.25-.03-.48-.1-.7a1.5 1.5 0 0 0-.3-.58c-.15-.18-.34-.3-.58-.4a2.54 2.54 0 0 0-.92-.17c-.5 0-.94.06-1.35.13-.4.08-.75.16-1 .25l-.27-1.74c.27-.1.67-.18 1.2-.28a9.34 9.34 0 0 1 1.65-.14zm.18 7.74c.66 0 1.15-.04 1.5-.1V10.2a5.1 5.1 0 0 0-2-.1c-.23.03-.45.1-.64.2a1.17 1.17 0 0 0-.47.38c-.13.17-.18.26-.18.52 0 .5.17.8.5.98.32.2.74.3 1.3.3zM84.1 4.8c.72 0 1.3.08 1.8.26.48.17.87.42 1.15.73.3.3.5.72.6 1.17.14.45.2.94.2 1.47v5.48a25.24 25.24 0 0 1-1.5.26c-.67.1-1.42.14-2.25.14a6.83 6.83 0 0 1-1.52-.16 3.2 3.2 0 0 1-1.18-.5 2.46 2.46 0 0 1-.76-.9c-.18-.38-.27-.9-.27-1.44 0-.53.1-.86.3-1.22.2-.36.5-.65.84-.88a3.6 3.6 0 0 1 1.24-.5 7.07 7.07 0 0 1 2.2-.1c.26.03.54.08.84.15v-.35c0-.24-.03-.48-.1-.7a1.5 1.5 0 0 0-.3-.58c-.15-.17-.34-.3-.58-.4a2.54 2.54 0 0 0-.9-.15c-.5 0-.96.05-1.37.12-.4.07-.75.15-1 .24l-.26-1.75c.27-.08.67-.17 1.18-.26a8.9 8.9 0 0 1 1.66-.15zm.2 7.73c.65 0 1.14-.04 1.48-.1v-2.17a5.1 5.1 0 0 0-1.98-.1c-.24.03-.46.1-.65.18a1.17 1.17 0 0 0-.47.4c-.12.17-.17.26-.17.52 0 .5.18.8.5.98.32.2.75.3 1.3.3zm8.68 1.74c-3.5 0-3.5-2.82-3.5-3.28L89.45.92 91.6.6v10c0 .25 0 1.87 1.38 1.88v1.8z"/><path fill="%231D3657" d="M5.03 11.03c0 .7-.26 1.24-.76 1.64-.5.4-1.2.6-2.1.6-.88 0-1.6-.14-2.17-.42v-1.2c.36.16.74.3 1.14.38.4.1.78.15 1.13.15.5 0 .88-.1 1.12-.3a.94.94 0 0 0 .35-.77.98.98 0 0 0-.33-.74c-.22-.2-.68-.44-1.37-.72-.72-.3-1.22-.62-1.52-1C.23 8.27.1 7.82.1 7.3c0-.65.22-1.17.7-1.55.46-.37 1.08-.56 1.86-.56.76 0 1.5.16 2.25.48l-.4 1.05c-.7-.3-1.32-.44-1.87-.44-.4 0-.73.08-.94.26a.9.9 0 0 0-.33.72c0 .2.04.38.12.52.08.15.22.3.42.4.2.14.55.3 1.06.52.58.24 1 .47 1.27.67.27.2.47.44.6.7.12.26.18.57.18.92zM9 13.27c-.92 0-1.64-.27-2.16-.8-.52-.55-.78-1.3-.78-2.24 0-.97.24-1.73.72-2.3.5-.54 1.15-.82 2-.82.78 0 1.4.25 1.85.72.46.48.7 1.14.7 1.97v.67H7.35c0 .58.17 1.02.46 1.33.3.3.7.47 1.24.47.36 0 .68-.04.98-.1a5.1 5.1 0 0 0 .98-.33v1.02a3.87 3.87 0 0 1-.94.32 5.72 5.72 0 0 1-1.08.1zm-.22-5.2c-.4 0-.73.12-.97.38s-.37.62-.42 1.1h2.7c0-.48-.13-.85-.36-1.1-.23-.26-.54-.38-.94-.38zm7.7 5.1l-.26-.84h-.05c-.28.36-.57.6-.86.74-.28.13-.65.2-1.1.2-.6 0-1.05-.16-1.38-.48-.32-.32-.5-.77-.5-1.34 0-.62.24-1.08.7-1.4.45-.3 1.14-.47 2.07-.5l1.02-.03V9.2c0-.37-.1-.65-.27-.84-.17-.2-.45-.28-.82-.28-.3 0-.6.04-.88.13a6.68 6.68 0 0 0-.8.33l-.4-.9a4.4 4.4 0 0 1 1.05-.4 4.86 4.86 0 0 1 1.08-.12c.76 0 1.33.18 1.7.5.4.33.6.85.6 1.56v4h-.9zm-1.9-.87c.47 0 .83-.13 1.1-.38.3-.26.43-.62.43-1.08v-.52l-.76.03c-.6.03-1.02.13-1.3.3s-.4.45-.4.82c0 .26.08.47.24.6.16.16.4.23.7.23zm7.57-5.2c.25 0 .46.03.62.06l-.12 1.18a2.38 2.38 0 0 0-.56-.06c-.5 0-.92.16-1.24.5-.3.32-.47.75-.47 1.27v3.1h-1.27V7.23h1l.16 1.05h.05c.2-.36.45-.64.77-.85a1.83 1.83 0 0 1 1.02-.3zm4.12 6.17c-.9 0-1.58-.27-2.05-.8-.47-.52-.7-1.27-.7-2.25 0-1 .24-1.77.73-2.3.5-.54 1.2-.8 2.12-.8.63 0 1.2.1 1.7.34l-.4 1c-.52-.2-.96-.3-1.3-.3-1.04 0-1.55.68-1.55 2.05 0 .67.13 1.17.38 1.5.26.34.64.5 1.13.5a3.23 3.23 0 0 0 1.6-.4v1.1a2.53 2.53 0 0 1-.73.28 4.36 4.36 0 0 1-.93.08zm8.28-.1h-1.27V9.5c0-.45-.1-.8-.28-1.02-.18-.23-.47-.34-.88-.34-.53 0-.9.16-1.16.48-.25.3-.38.85-.38 1.6v2.94h-1.26V4.8h1.26v2.12c0 .34-.02.7-.06 1.1h.08a1.76 1.76 0 0 1 .72-.67c.3-.16.66-.24 1.07-.24 1.43 0 2.15.74 2.15 2.2v3.86zM42.2 7.1c.74 0 1.32.28 1.73.82.4.53.62 1.3.62 2.26 0 .97-.2 1.73-.63 2.27-.42.54-1 .82-1.75.82s-1.33-.27-1.75-.8h-.08l-.23.7h-.94V4.8h1.26v2l-.02.64-.03.56h.05c.4-.6 1-.9 1.78-.9zm-.33 1.04c-.5 0-.88.15-1.1.45-.22.3-.34.8-.35 1.5v.08c0 .72.12 1.24.35 1.57.23.32.6.48 1.12.48.44 0 .78-.17 1-.53.24-.35.36-.87.36-1.53 0-1.35-.47-2.03-1.4-2.03zm3.24-.92h1.4l1.2 3.37c.18.47.3.92.36 1.34h.04l.18-.72 1.37-4H51l-2.53 6.73c-.46 1.23-1.23 1.85-2.3 1.85-.3 0-.56-.03-.83-.1v-1c.2.05.4.08.65.08.6 0 1.03-.36 1.28-1.06l.22-.56-2.4-5.94z"/></g></svg>');background-repeat: no-repeat;background-position: 50%;background-size: 100%;overflow: hidden;text-indent: -9000px;width: 110px;height: 100%;display: block;margin-left: auto;margin-right: 5px}
          </style>
          <style id="glamor-styles">
              .css-1tv5sxm, [data-css-1tv5sxm] {flex: 1 0 auto;margin-top: 60px;-webkit-flex: 1 0 auto;}
  
          @media (min-width: 780px) and (max-width: 1279px) {
              .css-1tv5sxm, [data-css-1tv5sxm] {margin-top: 50px;}
          }
  
          @media (max-width: 779px) {
              .css-1tv5sxm, [data-css-1tv5sxm] {margin-top: 40px;}
          }
  
          .css-190hivd, [data-css-190hivd] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: column;min-height: calc(100vh - 40px);-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column;}
  
          .css-184keb2, [data-css-184keb2] {color: inherit;margin-left: 10px;font-weight: 700;font-size: 20px;line-height: 20px;}
  
          @media (max-width: 979px) {
              .css-184keb2, [data-css-184keb2] {font-size: 16px;margin-top: 1px;}
          }
  
          @media (max-width: 599px) {
              .css-184keb2, [data-css-184keb2] {position: absolute;overflow: hidden;clip: rect(0 0 0 0);height: 1px;width: 1px;margin: -1px;padding: 0;border: 0;}
          }
  
          .css-4ivotw, [data-css-4ivotw] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;margin-right: 10px;height: 100%;align-items: center;color: #61dafb;-webkit-box-align: center;-webkit-align-items: center;}
  
          .css-4ivotw:focus, [data-css-4ivotw]:focus {outline: 0;color: #fff;}
  
          @media (min-width: 600px) {
              .css-4ivotw, [data-css-4ivotw] {width: calc(100% / 6);}
          }
  
          @media (max-width: 599px) {
              .css-4ivotw, [data-css-4ivotw] {flex: 0 0 auto;-webkit-flex: 0 0 auto;}
          }
  
          .css-79txt3, [data-css-79txt3] {flex: 1;display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: row;align-items: stretch;overflow-x: auto;overflow-y: hidden;-webkit-overflow-scrolling: touch;height: 100%;scrollbar-width: none;-ms-overflow-style: none;-webkit-flex: 1;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-webkit-box-align: stretch;-webkit-align-items: stretch;}
  
          .css-79txt3::-webkit-scrollbar, [data-css-79txt3]::-webkit-scrollbar {display: none;}
  
          @media (min-width: 0px) and (max-width: 599px) {
              .css-79txt3, [data-css-79txt3] {flex-grow: 1;width: auto;-webkit-flex-grow: 1;}
          }
  
          @media (max-width: 599px) {
              .css-79txt3, [data-css-79txt3] {mask-image: -webkit-linear-gradient(to right, transparent, black 20px, black 90%, transparent); mask-image: -moz-linear-gradient(to right, transparent, black 20px, black 90%, transparent); mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);-webkit-mask-image: -webkit-linear-gradient(to right, transparent, black 20px, black 90%, transparent); -webkit-mask-image: -moz-linear-gradient(to right, transparent, black 20px, black 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, black 20px, black 90%, transparent);}
          }
  
          .css-zvm479, [data-css-zvm479] {padding: 5px 10px;white-space: nowrap;font-size: 14px;}
  
          .css-zvm479:hover, [data-css-zvm479]:hover {color: #61dafb;}
  
          .css-zvm479:focus, [data-css-zvm479]:focus {outline: 0;background-color: #373940;border-radius: 15px;}
  
          @media (max-width: 779px) {
              .css-zvm479, [data-css-zvm479] {display: none;}
          }
  
          .css-1rsw1pf, [data-css-1rsw1pf] {margin-left: 0.5rem;}
  
          @media (max-width: 779px) {
              .css-1rsw1pf, [data-css-1rsw1pf] {display: none;}
          }
  
          .css-1upvlu3, [data-css-1upvlu3] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;align-items: center;padding: 5px 10px;white-space: nowrap;font-size: 14px;-webkit-box-align: center;-webkit-align-items: center;}
  
          .css-1upvlu3:hover, [data-css-1upvlu3]:hover {color: #61dafb;}
  
          .css-1upvlu3:focus, [data-css-1upvlu3]:focus {outline: 0;background-color: #373940;border-radius: 15px;}
  
          .css-6oo1gu, [data-css-6oo1gu] {padding: 5px 10px;margin-left: 10px;white-space: nowrap;font-size: 14px;}
  
          .css-6oo1gu:hover, [data-css-6oo1gu]:hover {color: #61dafb;}
  
          .css-6oo1gu:focus, [data-css-6oo1gu]:focus {outline: 0;background-color: #373940;border-radius: 15px;}
  
          @media (max-width: 979px) {
              .css-6oo1gu, [data-css-6oo1gu] {display: none;}
          }
  
          .css-nypjs8, [data-css-nypjs8] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;align-items: center;justify-content: flex-end;width: auto;-webkit-box-align: center;-webkit-align-items: center;-webkit-box-pack: end;-webkit-justify-content: flex-end;}
  
          .css-iiezwn, [data-css-iiezwn] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: row;align-items: center;height: 60px;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-webkit-box-align: center;-webkit-align-items: center;}
  
          @media (min-width: 600px) and (max-width: 1279px) {
              .css-iiezwn, [data-css-iiezwn] {height: 50px;}
          }
  
          @media (max-width: 599px) {
              .css-iiezwn, [data-css-iiezwn] {height: 40px;}
          }
  
          .css-mlkfzr, [data-css-mlkfzr] {background-color: #20232a;color: #fff;position: fixed;z-index: 1;width: 100%;top: 0;left: 0;}
  
          .css-tctv7l, [data-css-tctv7l] {padding-left: 20px;padding-right: 20px;margin-left: auto;margin-right: auto;}
  
          @media (min-width: 780px) {
              .css-tctv7l, [data-css-tctv7l] {width: 90%;}
          }
  
          @media (min-width: 1340px) {
              .css-tctv7l, [data-css-tctv7l] {max-width: 1260px;}
          }
  
          .css-hobwqm, [data-css-hobwqm] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: row;align-items: center;color: #fff;transition: color 0.2s ease-out;padding-left: 15px;padding-right: 15px;font-weight: 300;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-webkit-box-align: center;-webkit-align-items: center;-webkit-transition: color 0.2s ease-out;-moz-transition: color 0.2s ease-out;}
  
          .css-hobwqm:focus, [data-css-hobwqm]:focus {outline: 0;background-color: #373940;color: #fff;}
  
          @media (min-width: 0px) and (max-width: 599px) {
              .css-hobwqm, [data-css-hobwqm] {padding-left: 8px;padding-right: 8px;}
          }
  
          @media (min-width: 600px) and (max-width: 979px) {
              .css-hobwqm, [data-css-hobwqm] {padding-left: 10px;padding-right: 10px;}
          }
  
          @media (min-width: 1280px) {
              .css-hobwqm, [data-css-hobwqm] {padding-left: 20px;padding-right: 20px;font-size: 18px;}
  
              .css-hobwqm:hover:not(:focus), [data-css-hobwqm]:hover:not(:focus) {color: #61dafb;}
          }
  
          .css-7dpbpx, [data-css-7dpbpx] {width: 100%;appearance: none;background: transparent;border: 0;color: #fff;font-size: 18px;font-weight: 300;font-family: inherit;position: relative;padding: 4px 4px 4px 29px;background-image: url(/search.svg);background-size: 16px 16px;background-repeat: no-repeat;background-position-y: center;background-position-x: 4px;-webkit-appearance: none;-moz-appearance: none;}
  
          .css-7dpbpx:focus, [data-css-7dpbpx]:focus {outline: 0;background-color: #373940;border-radius: 0.25rem;}
  
          @media (max-width: 1179px) {
              .css-7dpbpx, [data-css-7dpbpx] {font-size: 16px;width: 16px;transition: width 0.2s ease, padding 0.2s ease;padding-left: 16px;-webkit-transition: width 0.2s ease, padding 0.2s ease;-moz-transition: width 0.2s ease, padding 0.2s ease;}
  
              .css-7dpbpx:focus, [data-css-7dpbpx]:focus {padding-left: 29px;width: 8rem;outline: none;}
          }
  
          .css-33zy79, [data-css-33zy79] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex: 0 0 auto;flex-direction: row;align-items: center;padding-left: 0.25rem;padding-right: 0.25rem;-webkit-flex: 0 0 auto;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-webkit-box-align: center;-webkit-align-items: center;}
  
          @media (max-width: 1179px) {
              .css-33zy79, [data-css-33zy79] {justify-content: flex-end;margin-right: 10px;-webkit-box-pack: end;-webkit-justify-content: flex-end;}
          }
  
          @media (min-width: 1180px) {
              .css-33zy79, [data-css-33zy79] {min-width: 100px;}
          }
  
          .css-c4d79v, [data-css-c4d79v] {fill: currentColor;}
  
          .css-19vhmgv, [data-css-19vhmgv] {margin-left: 5px;vertical-align: -2px;color: #6d6d6d;}
  
          .css-15lkjjo, [data-css-15lkjjo] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: column;flex-grow: 1;flex-shrink: 0;flex-basis: auto;justify-content: stretch;align-items: flex-start;-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column;-webkit-flex-grow: 1;-webkit-flex-shrink: 0;-webkit-flex-basis: auto;-webkit-box-pack: stretch;-webkit-justify-content: stretch;-webkit-box-align: start;-webkit-align-items: flex-start;}
  
          .css-15weewl, [data-css-15weewl] {line-height: 25px;}
  
          .css-15weewl .gatsby-highlight, [data-css-15weewl] .gatsby-highlight {margin-top: 25px;margin-left: -30px;margin-right: -30px;margin-bottom: 25px;padding-left: 15px;padding-right: 15px;}
  
          .css-15weewl a:not(.anchor):not(.gatsby-resp-image-link), [data-css-15weewl] a:not(.anchor):not(.gatsby-resp-image-link) {background-color: rgba(187, 239, 253, 0.3);border-bottom: 1px solid rgba(0, 0, 0, 0.2);color: #1a1a1a;}
  
          .css-15weewl a:not(.anchor):not(.gatsby-resp-image-link):hover, [data-css-15weewl] a:not(.anchor):not(.gatsby-resp-image-link):hover {background-color: #bbeffd;border-bottom-color: #1a1a1a;}
  
          .css-15weewl > p:first-child, [data-css-15weewl] > p:first-child {font-size: 18px;font-weight: 300;color: #6d6d6d;}
  
          .css-15weewl > p:first-child a, [data-css-15weewl] > p:first-child a, .css-15weewl > p:first-child strong, [data-css-15weewl] > p:first-child strong {font-weight: 400;}
  
          .css-15weewl p, [data-css-15weewl] p {margin-top: 30px;font-size: 17px;line-height: 1.7;max-width: 42em;}
  
          .css-15weewl p:first-of-type, [data-css-15weewl] p:first-of-type {margin-top: 15px;}
  
          .css-15weewl p:first-child, [data-css-15weewl] p:first-child {margin-top: 0;}
  
          .css-15weewl h3 + p, [data-css-15weewl] h3 + p, .css-15weewl h3 + p:first-of-type, [data-css-15weewl] h3 + p:first-of-type {margin-top: 20px;}
  
          .css-15weewl p > code, [data-css-15weewl] p > code, .css-15weewl li > code, [data-css-15weewl] li > code {background: rgba(255, 229, 100, 0.2);color: #1a1a1a;}
  
          .css-15weewl p > code, [data-css-15weewl] p > code, .css-15weewl li > code, [data-css-15weewl] li > code, .css-15weewl p > a > code, [data-css-15weewl] p > a > code, .css-15weewl li > a > code, [data-css-15weewl] li > a > code {padding: 0 3px;font-size: 0.94em;word-break: break-word;}
  
          .css-15weewl hr, [data-css-15weewl] hr {height: 1px;margin-bottom: -1px;border: none;border-bottom: 1px solid #ececec;margin-top: 40px;}
  
          .css-15weewl hr:first-child, [data-css-15weewl] hr:first-child {margin-top: 0;}
  
          .css-15weewl h1, [data-css-15weewl] h1 {line-height: 1.2;}
  
          .css-15weewl h2::before, [data-css-15weewl] h2::before {content: " ";display: block;border-bottom: 1px solid #ececec;padding-top: 44px;margin-bottom: 40px;}
  
          .css-15weewl h2, [data-css-15weewl] h2 {line-height: 1.2;}
  
          .css-15weewl h2:first-child::before, [data-css-15weewl] h2:first-child::before {content: " ";display: block;border-bottom: 0;padding-top: 40px;margin-top: -80px;}
  
          .css-15weewl hr + h2, [data-css-15weewl] hr + h2 {border-top: 0;margin-top: 0;}
  
          .css-15weewl h3::before, [data-css-15weewl] h3::before {content: " ";display: block;padding-top: 90px;margin-top: -45px;}
  
          .css-15weewl h2 + h3::before, [data-css-15weewl] h2 + h3::before, .css-15weewl h2 + h3:first-of-type::before, [data-css-15weewl] h2 + h3:first-of-type::before {content: " ";display: block;padding-top: 60px;margin-top: -30px;}
  
          .css-15weewl h4::before, [data-css-15weewl] h4::before {content: " ";display: block;padding-top: 100px;margin-top: -50px;}
  
          .css-15weewl h4, [data-css-15weewl] h4 {font-size: 20px;color: #6d6d6d;line-height: 1.3;font-weight: 400;}
  
          .css-15weewl h4 + p, [data-css-15weewl] h4 + p {margin-top: 20px;}
  
          .css-15weewl ol, [data-css-15weewl] ol, .css-15weewl ul, [data-css-15weewl] ul {margin-top: 20px;font-size: 16px;color: #1a1a1a;padding-left: 20px;}
  
          .css-15weewl ol p, [data-css-15weewl] ol p, .css-15weewl ul p, [data-css-15weewl] ul p, .css-15weewl ol p:first-of-type, [data-css-15weewl] ol p:first-of-type, .css-15weewl ul p:first-of-type, [data-css-15weewl] ul p:first-of-type {font-size: 16px;margin-top: 0;line-height: 1.2;}
  
          .css-15weewl ol li, [data-css-15weewl] ol li, .css-15weewl ul li, [data-css-15weewl] ul li {margin-top: 10px;}
  
          .css-15weewl ol li.button-newapp, [data-css-15weewl] ol li.button-newapp, .css-15weewl ul li.button-newapp, [data-css-15weewl] ul li.button-newapp {margin-top: 0;}
  
          .css-15weewl ol ol, [data-css-15weewl] ol ol, .css-15weewl ul ol, [data-css-15weewl] ul ol, .css-15weewl ol ul, [data-css-15weewl] ol ul, .css-15weewl ul ul, [data-css-15weewl] ul ul {margin-left: 20px;margin-top: 10px;}
  
          .css-15weewl img, [data-css-15weewl] img {max-width: 100%;}
  
          .css-15weewl ol, [data-css-15weewl] ol {list-style: decimal;}
  
          .css-15weewl ul, [data-css-15weewl] ul {list-style: disc;}
  
          .css-15weewl blockquote, [data-css-15weewl] blockquote {background-color: rgba(255, 229, 100, 0.3);border-left-color: #ffe564;border-left-width: 9px;border-left-style: solid;padding: 20px 45px 20px 26px;margin-bottom: 30px;margin-top: 20px;margin-left: -30px;margin-right: -30px;}
  
          .css-15weewl blockquote p, [data-css-15weewl] blockquote p {margin-top: 15px;}
  
          .css-15weewl blockquote p:first-of-type, [data-css-15weewl] blockquote p:first-of-type {font-weight: 700;margin-top: 0;}
  
          .css-15weewl blockquote p:nth-of-type(2), [data-css-15weewl] blockquote p:nth-of-type(2) {margin-top: 0;}
  
          .css-15weewl blockquote .gatsby-highlight, [data-css-15weewl] blockquote .gatsby-highlight {margin-left: 0;}
  
          .css-15weewl .gatsby-highlight + blockquote, [data-css-15weewl] .gatsby-highlight + blockquote {margin-top: 40px;}
  
          .css-15weewl .gatsby-highlight + h4::before, [data-css-15weewl] .gatsby-highlight + h4::before {content: " ";display: block;padding-top: 85px;margin-top: -60px;}
  
          @media (max-width: 599px) {
              .css-15weewl .gatsby-highlight, [data-css-15weewl] .gatsby-highlight {margin-left: -20px;margin-right: -20px;border-radius: 0;}
  
              .css-15weewl h3, [data-css-15weewl] h3 {overflow-wrap: break-word;word-break: break-word;}
  
              .css-15weewl blockquote, [data-css-15weewl] blockquote {margin-left: -20px;margin-right: -20px;}
          }
  
          @media (min-width: 1280px) {
              .css-15weewl > p:first-child, [data-css-15weewl] > p:first-child {font-size: 24px;}
  
              .css-15weewl h1, [data-css-15weewl] h1 {font-size: 60px;}
  
              .css-15weewl h2, [data-css-15weewl] h2 {font-size: 35px;}
  
              .css-15weewl h3, [data-css-15weewl] h3 {font-size: 25px;line-height: 1.3;}
          }
  
          @media (max-width: 979px) {
              .css-15weewl p, [data-css-15weewl] p {font-size: 16px;margin-top: 25px;}
  
              .css-15weewl h2, [data-css-15weewl] h2 {font-size: 20px;}
          }
  
          @media (min-width: 0px) and (max-width: 599px) {
              .css-15weewl h1, [data-css-15weewl] h1 {font-size: 30px;}
          }
  
          @media (min-width: 600px) and (max-width: 1279px) {
              .css-15weewl h1, [data-css-15weewl] h1 {font-size: 45px;}
          }
  
          .css-1q9mcvr, [data-css-1q9mcvr] {flex-wrap: wrap;display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;-webkit-box-lines: multiple;-webkit-flex-wrap: wrap;}
  
          @media (max-width: 979px) {
              .css-1q9mcvr, [data-css-1q9mcvr] {width: 100%;}
          }
  
          @media (min-width: 1280px) {
              .css-1q9mcvr, [data-css-1q9mcvr] {width: calc(100% / 3 * 2);padding-left: 40px;}
          }
  
          .css-1izr7si, [data-css-1izr7si] {max-width: 160px;height: auto;}
  
          .css-1yy5aal, [data-css-1yy5aal] {color: #999;padding-top: 15px;}
  
          .css-smm72f, [data-css-smm72f] {background-color: #20232a;color: #fff;padding-top: 10px;padding-bottom: 50px;}
  
          @media (min-width: 2000px) {
              .css-smm72f, [data-css-smm72f] {padding-top: 40px;}
          }
  
          .css-1m3wp4q, [data-css-1m3wp4q] {display: -webkit-inline-box; display: -moz-inline-box; display: -ms-inline-flexbox; display: -webkit-inline-flex; display: inline-flex;flex-direction: column;-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column;}
  
          .css-12bsqfj, [data-css-12bsqfj] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: column;align-items: flex-start;width: 50%;padding-top: 40px;-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column;-webkit-box-align: start;-webkit-align-items: flex-start;}
  
          @media (min-width: 2000px) {
              .css-12bsqfj, [data-css-12bsqfj] {padding-top: 0;width: 25%;}
          }
  
          .css-109jn6d, [data-css-109jn6d] {color: #999;font-size: 14px;font-weight: 700;line-height: 3;text-transform: uppercase;letter-spacing: 0.08em;}
  
          .css-8l81zy, [data-css-8l81zy] {line-height: 2;}
  
          .css-8l81zy:hover, [data-css-8l81zy]:hover {color: #61dafb;}
  
          .css-83uoqv, [data-css-83uoqv] {vertical-align: -2px;display: inline-block;margin-left: 5px;color: #6d6d6d;}
  
          .css-1tq073i, [data-css-1tq073i] {padding-top: 40px;display: block !important;}
  
          @media (min-width: 1280px) {
              .css-1tq073i, [data-css-1tq073i] {width: calc(100% / 3);order: -1;-webkit-order: -1;}
          }
  
          @media (min-width: 980px) {
              .css-1tq073i, [data-css-1tq073i] {order: -1;width: calc(100% / 3);-webkit-order: -1;}
          }
  
          @media (max-width: 979px) {
              .css-1tq073i, [data-css-1tq073i] {text-align: center;width: 100%;padding-top: 40px;}
          }
  
          .css-17njq4x, [data-css-17njq4x] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: row;flex-wrap: wrap;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-webkit-box-lines: multiple;-webkit-flex-wrap: wrap;}
  
          .css-159p4b7, [data-css-159p4b7] {color: #61dafb;text-align: center;margin: 0;font-size: 45px;letter-spacing: 0.01em;}
  
          @media (min-width: 0px) and (max-width: 599px) {
              .css-159p4b7, [data-css-159p4b7] {font-size: 30px;}
          }
  
          @media (min-width: 1280px) {
              .css-159p4b7, [data-css-159p4b7] {font-size: 60px;}
          }
  
          .css-1s44ra, [data-css-1s44ra] {padding-top: 15px;text-align: center;font-size: 24px;letter-spacing: 0.01em;font-weight: 200;}
  
          @media (min-width: 0px) and (max-width: 599px) {
              .css-1s44ra, [data-css-1s44ra] {font-size: 16px;max-width: 12em;margin-left: auto;margin-right: auto;}
          }
  
          @media (min-width: 1280px) {
              .css-1s44ra, [data-css-1s44ra] {padding-top: 20px;font-size: 30px;}
          }
  
          .css-v4xx2e, [data-css-v4xx2e] {padding-top: 40px;flex-wrap: wrap;justify-content: center;-webkit-box-lines: multiple;-webkit-flex-wrap: wrap;-webkit-box-pack: center;-webkit-justify-content: center;}
  
          @media (min-width: 1280px) {
              .css-v4xx2e, [data-css-v4xx2e] {padding-top: 65px;}
          }
  
          .css-13azwyo, [data-css-13azwyo] {position: relative;}
  
          .css-1ihkopo, [data-css-1ihkopo] {padding-top: 45px;padding-bottom: 10px;}
  
          @media (min-width: 600px) {
              .css-1ihkopo, [data-css-1ihkopo] {padding-top: 60px;padding-bottom: 70px;}
          }
  
          @media (min-width: 1280px) {
              .css-1ihkopo, [data-css-1ihkopo] {padding-top: 95px;padding-bottom: 85px;max-width: 1500px;margin-left: auto;margin-right: auto;position: relative;}
  
              .css-1ihkopo::before, [data-css-1ihkopo]::before {content: " ";position: absolute;top: 0;left: 0;bottom: 0;right: 0;background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjZmZmIi8+CiAgPGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K);background-repeat: no-repeat;background-position: 100% 100px;background-size: 50% auto;opacity: 0.05;}
          }
  
          .css-17t02fm, [data-css-17t02fm] {background-color: #282c34;color: #fff;}
  
          .css-1xm4gxl.css-1xm4gxl, [data-css-1xm4gxl][data-css-1xm4gxl] {margin-bottom: 20px;color: #6d6d6d;padding-top: 0;font-weight: 300;font-size: 20px;}
  
          @media (min-width: 1280px) {
              .css-1xm4gxl.css-1xm4gxl, [data-css-1xm4gxl][data-css-1xm4gxl] {font-size: 24px;}
          }
  
          .css-1vcfx3l, [data-css-1vcfx3l] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: column;flex: 0 1 33%;margin-left: 40px;-webkit-box-orient: vertical;-webkit-box-direction: normal;-webkit-flex-direction: column;-webkit-flex: 0 1 33%;}
  
          .css-1vcfx3l:first-of-type, [data-css-1vcfx3l]:first-of-type {margin-left: 0;}
  
          @media (max-width: 779px) {
              .css-1vcfx3l, [data-css-1vcfx3l] {display: inline-block;vertical-align: top;margin-left: 0;white-space: normal;width: 75%;margin-right: 20px;padding-bottom: 40px;}
  
              .css-1vcfx3l:first-of-type, [data-css-1vcfx3l]:first-of-type {margin-left: 10px;margin-top: 0;}
          }
  
          .css-5uoymd, [data-css-5uoymd] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: row;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;}
  
          @media (max-width: 779px) {
              .css-5uoymd, [data-css-5uoymd] {display: block;white-space: nowrap;}
          }
  
          .css-18jayfr, [data-css-18jayfr] {margin-top: 20px;margin-bottom: 15px;}
  
          @media (min-width: 780px) {
              .css-18jayfr, [data-css-18jayfr] {margin-top: 60px;margin-bottom: 65px;}
          }
  
          @media (max-width: 779px) {
              .css-18jayfr, [data-css-18jayfr] {margin-top: 0;margin-bottom: 0;overflow-x: auto;padding-top: 30px;-webkit-overflow-scrolling: touch;position: relative;mask-image: -webkit-linear-gradient(to right, transparent, white 10px, white 90%, transparent); mask-image: -moz-linear-gradient(to right, transparent, white 10px, white 90%, transparent); mask-image: linear-gradient(to right, transparent, white 10px, white 90%, transparent);-webkit-mask-image: -webkit-linear-gradient(to right, transparent, white 10px, white 90%, transparent); -webkit-mask-image: -moz-linear-gradient(to right, transparent, white 10px, white 90%, transparent); -webkit-mask-image: linear-gradient(to right, transparent, white 10px, white 90%, transparent);}
          }
  
          .css-gw4hsb, [data-css-gw4hsb] {height: 1px;margin-bottom: -1px;border: none;border-bottom: 1 solid #ececec;}
  
          .css-17jiu04.css-17jiu04, [data-css-17jiu04][data-css-17jiu04] {margin-bottom: 20px;}
  
          .css-11zf7qr, [data-css-11zf7qr] {margin-top: 20px;margin-bottom: 15px;}
  
          @media (min-width: 780px) {
              .css-11zf7qr, [data-css-11zf7qr] {margin-top: 60px;margin-bottom: 65px;}
          }
  
          .css-19z06ao, [data-css-19z06ao] {flex-wrap: wrap;justify-content: center;-webkit-box-lines: multiple;-webkit-flex-wrap: wrap;-webkit-box-pack: center;-webkit-justify-content: center;}
  
          .css-14dg8zm, [data-css-14dg8zm] {background: #282c34;color: #fff;padding-top: 45px;padding-bottom: 25px;}
  
          .css-63oe3q, [data-css-63oe3q] {width: 100%;}
  
          .css-1k80xq8, [data-css-1k80xq8] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: row;flex-grow: 0;flex-shrink: 1;flex-basis: auto;justify-content: center;align-items: center;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;-webkit-flex-grow: 0;-webkit-flex-shrink: 1;-webkit-flex-basis: auto;-webkit-box-pack: center;-webkit-justify-content: center;-webkit-box-align: center;-webkit-align-items: center;}
  
          .css-1ezwgyu:first-child, [data-css-1ezwgyu]:first-child {text-align: right;padding-right: 7px;padding-left: 7px;}
  
          .css-1ezwgyu:nth-child(2), [data-css-1ezwgyu]:nth-child(2) {padding-right: 7px;padding-left: 7px;}
  
          @media (min-width: 600px) and (max-width: 1279px) {
              .css-1ezwgyu, [data-css-1ezwgyu] {padding-left: 20px;}
          }
  
          @media (min-width: 1280px) {
              .css-1ezwgyu, [data-css-1ezwgyu] {padding-left: 40px;}
          }
  
          @media (max-width: 599px) {
              .css-1ezwgyu:first-child, [data-css-1ezwgyu]:first-child {margin-bottom: 10px;}
  
              .css-1ezwgyu:nth-child(2), [data-css-1ezwgyu]:nth-child(2) {margin-bottom: 10px;}
          }
  
          @media (min-width: 600px) {
              .css-1ezwgyu:nth-child(2), [data-css-1ezwgyu]:nth-child(2) {padding-left: 15px;}
          }
  
          .css-1053yfl, [data-css-1053yfl] {display: inline-block;font-size: 16px;background-color: #61dafb;color: #000;padding: 10px 25px;white-space: nowrap;transition: background-color 0.2s ease-out;-webkit-transition: background-color 0.2s ease-out;-moz-transition: background-color 0.2s ease-out;}
  
          .css-1053yfl:hover, [data-css-1053yfl]:hover {background-color: #fff;}
  
          @media (min-width: 1280px) {
              .css-1053yfl, [data-css-1053yfl] {font-size: 20px;padding-top: 15px;padding-bottom: 15px;}
          }
  
          .css-13foh4g, [data-css-13foh4g] {display: inline-block;font-size: 16px;color: #61dafb;transition: color 0.2s ease-out;-webkit-transition: color 0.2s ease-out;-moz-transition: color 0.2s ease-out;}
  
          .css-13foh4g:hover, [data-css-13foh4g]:hover {color: #fff;}
  
          @media (min-width: 1280px) {
              .css-13foh4g, [data-css-13foh4g] {font-size: 20px;}
          }
  
          .css-b7q1rs, [data-css-b7q1rs] {margin-left: 10px;}
  
          .css-7ddkg0, [data-css-7ddkg0] {flex: 0 0 33%;-webkit-flex: 0 0 33%;}
  
          .css-7ddkg0 h3, [data-css-7ddkg0] h3 {color: #282c34;max-width: 11em;padding-top: 0;}
  
          .css-7ddkg0 p, [data-css-7ddkg0] p {margin-top: 15px;margin-right: 40px;line-height: 1.7;}
  
          @media (max-width: 1279px) {
              .css-7ddkg0, [data-css-7ddkg0] {margin-bottom: 20px;}
          }
  
          @media (min-width: 1280px) {
              .css-7ddkg0 p, [data-css-7ddkg0] p {margin-top: 25px;}
          }
  
          .css-1hlq8ls, [data-css-1hlq8ls] {margin-top: 40px;}
  
          .css-1hlq8ls:first-child, [data-css-1hlq8ls]:first-child {margin-top: 0;}
  
          .css-1hlq8ls .react-live, [data-css-1hlq8ls] .react-live {width: 100%;}
  
          @media (min-width: 1280px) {
              .css-1hlq8ls, [data-css-1hlq8ls] {display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;flex-direction: row;margin-top: 80px;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-webkit-flex-direction: row;}
          }
  
          @media (max-width: 979px) {
              .css-1hlq8ls, [data-css-1hlq8ls] {display: block;}
          }
          </style>
          <style type="text/css">
              .anchor {
                  float: left;
                  padding-right: 4px;
                  margin-left: -20px;
              }
  
              h1 .anchor svg,
              h2 .anchor svg,
              h3 .anchor svg,
              h4 .anchor svg,
              h5 .anchor svg,
              h6 .anchor svg {
                  visibility: hidden;
              }
  
              h1:hover .anchor svg,
              h2:hover .anchor svg,
              h3:hover .anchor svg,
              h4:hover .anchor svg,
              h5:hover .anchor svg,
              h6:hover .anchor svg,
              h1 .anchor:focus svg,
              h2 .anchor:focus svg,
              h3 .anchor:focus svg,
              h4 .anchor:focus svg,
              h5 .anchor:focus svg,
              h6 .anchor:focus svg {
                  visibility: visible;
              }
          </style>
          <style id="nprogress-styles">
              #nprogress {
                  pointer-events: none;
              }
  
              #nprogress .bar {
                  background: #61dafb;
                  position: fixed;
                  z-index: 1031;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 2px;
              }
  
              #nprogress .peg {
                  display: block;
                  position: absolute;
                  right: 0px;
                  width: 100px;
                  height: 100%;
                  box-shadow: 0 0 10px #61dafb, 0 0 5px #61dafb;
                  opacity: 1.0;
                  -webkit-transform: rotate(3deg) translate(0px, -4px);
                  -ms-transform: rotate(3deg) translate(0px, -4px);
                  transform: rotate(3deg) translate(0px, -4px);
              }
  
              #nprogress .spinner {
                  display: block;
                  position: fixed;
                  z-index: 1031;
                  top: 15px;
                  right: 15px;
              }
  
              #nprogress .spinner-icon {
                  width: 18px;
                  height: 18px;
                  box-sizing: border-box;
                  border: solid 2px transparent;
                  border-top-color: #61dafb;
                  border-left-color: #61dafb;
                  border-radius: 50%;
                  -webkit-animation: nprogress-spinner 400ms linear infinite;
                  animation: nprogress-spinner 400ms linear infinite;
              }
  
              .nprogress-custom-parent {
                  overflow: hidden;
                  position: relative;
              }
  
              .nprogress-custom-parent #nprogress .spinner,
              .nprogress-custom-parent #nprogress .bar {
                  position: absolute;
              }
  
              @-webkit-keyframes nprogress-spinner {
                  0% {
                      -webkit-transform: rotate(0deg);
                  }
                  100% {
                      -webkit-transform: rotate(360deg);
                  }
              }
  
              @keyframes nprogress-spinner {
                  0% {
                      transform: rotate(0deg);
                  }
                  100% {
                      transform: rotate(360deg);
                  }
              }
          </style>
      </head>
      <body>
          <div id="___gatsby">
              <div style="outline:none" tabindex="-1" role="group">
                  <div class="css-190hivd">
                      <header class="css-mlkfzr">
                          <div class="css-tctv7l">
                              <div class="css-iiezwn"><a aria-current="page" class="css-4ivotw" href="https://reactjs.org/"><img
                                      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
                                      alt="" height="20"><span class="css-184keb2">React</span></a>
                                  <nav class="css-79txt3"><a class="css-hobwqm"
                                                             href="https://reactjs.org/docs/getting-started.html">Docs</a><a
                                          class="css-hobwqm" href="https://reactjs.org/tutorial/tutorial.html">Tutorial</a><a
                                          class="css-hobwqm" href="https://reactjs.org/blog/">Blog</a><a class="css-hobwqm"
                                                                                                         href="https://reactjs.org/community/support.html">Community</a>
                                  </nav>
                                  <form class="css-33zy79"><span class="algolia-autocomplete"
                                                                 style="position: relative; display: inline-block; direction: ltr;"><input
                                          type="search" id="algolia-doc-search" placeholder="Search" aria-label="Search docs"
                                          class="css-7dpbpx ds-input" autocomplete="off" spellcheck="false" role="combobox"
                                          aria-autocomplete="list" aria-expanded="false" aria-labelledby="algolia-doc-search"
                                          aria-owns="algolia-autocomplete-listbox-0" dir="auto"
                                          style="position: relative; vertical-align: top;"><pre aria-hidden="true"
                                                                                                style="position: absolute; visibility: hidden; white-space: pre; font-family: -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif; font-size: 18px; font-style: normal; font-variant: normal; font-weight: 300; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"></pre><span
                                          class="ds-dropdown-menu" role="listbox" id="algolia-autocomplete-listbox-0"
                                          style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"><div
                                          class="ds-dataset-1"></div></span></span></form>
                                  <div class="css-nypjs8"><a class="css-zvm479" href="https://reactjs.org/versions">v<!-- --> 16.8.6</a><a
                                          class="css-1upvlu3" href="https://reactjs.org/languages">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                          <path d="M0 0h24v24H0z" fill="none"></path>
                                          <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z "
                                                class="css-c4d79v"></path>
                                      </svg>
                                      <span class="css-1rsw1pf">Languages</span></a><a href="https://github.com/facebook/react/"
                                                                                       target="_blank" rel="noopener" class="css-6oo1gu">GitHub
                                      <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-19vhmgv">
                                          <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                          <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                      </svg>
                                  </a></div>
                              </div>
                          </div>
                      </header>
                      <div class="css-1tv5sxm css-15lkjjo">
                          <div class="css-63oe3q">
                              <header class="css-17t02fm">
                                  <div class="css-1ihkopo">
                                      <div class="css-13azwyo">
                                          <div class="css-tctv7l"><h1 class="css-159p4b7">React</h1>
                                              <p class="css-1s44ra">A JavaScript library for building user interfaces</p>
                                              <div class="css-v4xx2e css-1k80xq8">
                                                  <div class="css-1ezwgyu"><a class="css-1053yfl"
                                                                              href="https://reactjs.org/docs/getting-started.html">Get
                                                      Started</a></div>
                                                  <div class="css-1ezwgyu"><a class="css-13foh4g"
                                                                              href="https://reactjs.org/tutorial/tutorial.html">Take the
                                                      Tutorial
                                                      <svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.53657 8.69699"
                                                           class="css-b7q1rs">
                                                          <path d="
          M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
          0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
          0,0,1,.18254,8.697Z
        " fill="currentColor"></path>
                                                      </svg>
                                                  </a></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </header>
                              <div class="css-tctv7l">
                                  <div class="css-15weewl">
                                      <section class="css-18jayfr">
                                          <div class="css-5uoymd">
                                              <div class="css-1vcfx3l"><h3 class="css-1xm4gxl">Declarative</h3>
                                                  <div><p>React makes it painless to create interactive UIs. Design simple views for each
                                                      state in your application, and React will efficiently update and render just the right
                                                      components when your data changes.</p>
                                                      <p>Declarative views make your code more predictable and easier to debug.</p></div>
                                              </div>
                                              <div class="css-1vcfx3l"><h3 class="css-1xm4gxl">Component-Based</h3>
                                                  <div><p>Build encapsulated components that manage their own state, then compose them to make
                                                      complex UIs.</p>
                                                      <p>Since component logic is written in JavaScript instead of templates, you can easily
                                                          pass rich data through your app and keep state out of the&nbsp;DOM.</p></div>
                                              </div>
                                              <div class="css-1vcfx3l"><h3 class="css-1xm4gxl">Learn&nbsp;Once, Write&nbsp;Anywhere</h3>
                                                  <div><p>We don’t make assumptions about the rest of your technology stack, so you can
                                                      develop new features in React without rewriting existing code.</p>
                                                      <p>React can also render on the server using Node and power mobile apps using <a
                                                              href="https://facebook.github.io/react-native/" target="_blank"
                                                              rel="nofollow noopener noreferrer">React Native</a>.</p></div>
                                              </div>
                                          </div>
                                      </section>
                                      <hr class="css-gw4hsb">
                                      <section class="css-11zf7qr">
                                          <div id="examples">
                                              <div id="a-simple-component" class="css-1hlq8ls">
                                                  <div class="css-7ddkg0"><h3 class="css-17jiu04">A Simple Component</h3>
                                                      <div><p>React components implement a <code class="gatsby-code-text">render()</code>
                                                          method that takes input data and returns what to display. This example uses an
                                                          XML-like syntax called JSX. Input data that is passed into the component can be
                                                          accessed by <code class="gatsby-code-text">render()</code> via <code
                                                                  class="gatsby-code-text">this.props</code>.</p>
                                                          <p><strong>JSX is optional and not required to use React.</strong> Try the <a
                                                                  href="https://babeljs.io/repl/#?presets=react&amp;code_lz=MYewdgzgLgBApgGzgWzmWBeGAeAFgRgD4AJRBEAGhgHcQAnBAEwEJsB6AwgbgChRJY_KAEMAlmDh0YWRiGABXVOgB0AczhQAokiVQAQgE8AkowAUAcjogQUcwEpeAJTjDgUACIB5ALLK6aRklTRBQ0KCohMQk6Bx4gA"
                                                                  target="_blank" rel="noreferrer">Babel REPL</a> to see the raw JavaScript
                                                              code produced by the JSX compilation step.</p></div>
                                                  </div>
                                                  <div class="react-live">
                                                      <div class="css-1rx7ryx">
                                                          <div class="css-rlak57">
                                                              <div class="css-xj6x4o">
                                                                  <div class="css-109jn6d">Live JSX Editor<label class="css-7qz0p2"><input
                                                                          type="checkbox" checked=""> JSX?</label></div>
                                                              </div>
                                                              <div class="gatsby-highlight css-t5ws0a"><pre class="prism-code"
                                                                                                            spellcheck="false"
                                                                                                            contenteditable="true"><span
                                                                      class="token keyword">class</span> <span class="token class-name">HelloMessage</span> <span
                                                                      class="token keyword">extends</span> <span class="token class-name">React<span
                                                                      class="token punctuation">.</span>Component</span> <span
                                                                      class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
          Hello <span class="token punctuation">{</span><span class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>props<span
                                                                          class="token punctuation">.</span>name<span
                                                                          class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>HelloMessage</span> <span
            class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span
            class="token punctuation">"</span>Taylor<span class="token punctuation">"</span></span> <span
            class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span
                                                                          class="token string">'hello-example'</span><span
                                                                          class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
                                                              </div>
                                                          </div>
                                                          <div class="css-1bx1f1e">
                                                              <div class="css-ljjjy7">
                                                                  <div class="css-1mfng2l">Result</div>
                                                              </div>
                                                              <div id="hello-example" class="css-l12faq">
                                                                  <div>Hello Taylor</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div id="a-stateful-component" class="css-1hlq8ls">
                                                  <div class="css-7ddkg0"><h3 class="css-17jiu04">A Stateful Component</h3>
                                                      <div><p>In addition to taking input data (accessed via <code class="gatsby-code-text">this.props</code>),
                                                          a component can maintain internal state data (accessed via <code
                                                                  class="gatsby-code-text">this.state</code>). When a component’s state data
                                                          changes, the rendered markup will be updated by re-invoking <code
                                                                  class="gatsby-code-text">render()</code>.</p></div>
                                                  </div>
                                                  <div class="react-live">
                                                      <div class="css-1rx7ryx">
                                                          <div class="css-rlak57">
                                                              <div class="css-xj6x4o">
                                                                  <div class="css-109jn6d">Live JSX Editor<label class="css-7qz0p2"><input
                                                                          type="checkbox" checked=""> JSX?</label></div>
                                                              </div>
                                                              <div class="gatsby-highlight css-t5ws0a"><pre class="prism-code"
                                                                                                            spellcheck="false"
                                                                                                            contenteditable="true"><span
                                                                      class="token keyword">class</span> <span
                                                                      class="token class-name">Timer</span> <span class="token keyword">extends</span> <span
                                                                      class="token class-name">React<span class="token punctuation">.</span>Component</span> <span
                                                                      class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span
                                                                          class="token punctuation">{</span> seconds<span
                                                                          class="token punctuation">:</span> <span
                                                                          class="token number">0</span> <span
                                                                          class="token punctuation">}</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">tick</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span
                                                                          class="token punctuation">(</span>state <span
                                                                          class="token operator">=</span><span
                                                                          class="token operator">&gt;</span> <span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">{</span>
        seconds<span class="token punctuation">:</span> state<span class="token punctuation">.</span>seconds <span
                                                                          class="token operator">+</span> <span class="token number">1</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span
                                                                          class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>interval <span class="token operator">=</span> <span
                                                                          class="token function">setInterval</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">)</span> <span
                                                                          class="token operator">=</span><span
                                                                          class="token operator">&gt;</span> <span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">.</span><span
                                                                          class="token function">tick</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">,</span> <span
                                                                          class="token number">1000</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span
                                                                          class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token function">clearInterval</span><span class="token punctuation">(</span><span class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>interval<span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
          Seconds<span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>state<span
                                                                          class="token punctuation">.</span>seconds<span
                                                                          class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Timer</span> <span class="token punctuation">/&gt;</span></span><span
                                                                          class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span
                                                                          class="token string">'timer-example'</span><span
                                                                          class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span></pre>
                                                              </div>
                                                          </div>
                                                          <div class="css-1bx1f1e">
                                                              <div class="css-ljjjy7">
                                                                  <div class="css-1mfng2l">Result</div>
                                                              </div>
                                                              <div id="timer-example" class="css-l12faq">
                                                                  <div>Seconds: 9</div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div id="an-application" class="css-1hlq8ls">
                                                  <div class="css-7ddkg0"><h3 class="css-17jiu04">An Application</h3>
                                                      <div><p>Using <code class="gatsby-code-text">props</code> and <code
                                                              class="gatsby-code-text">state</code>, we can put together a small Todo
                                                          application. This example uses <code class="gatsby-code-text">state</code> to track
                                                          the current list of items as well as the text that the user has entered. Although
                                                          event handlers appear to be rendered inline, they will be collected and implemented
                                                          using event delegation.</p></div>
                                                  </div>
                                                  <div class="react-live">
                                                      <div class="css-1rx7ryx">
                                                          <div class="css-rlak57">
                                                              <div class="css-xj6x4o">
                                                                  <div class="css-109jn6d">Live JSX Editor<label class="css-7qz0p2"><input
                                                                          type="checkbox" checked=""> JSX?</label></div>
                                                              </div>
                                                              <div class="gatsby-highlight css-t5ws0a"><pre class="prism-code"
                                                                                                            spellcheck="false"
                                                                                                            contenteditable="true"><span
                                                                      class="token keyword">class</span> <span class="token class-name">TodoApp</span> <span
                                                                      class="token keyword">extends</span> <span class="token class-name">React<span
                                                                      class="token punctuation">.</span>Component</span> <span
                                                                      class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span
                                                                          class="token punctuation">{</span> items<span
                                                                          class="token punctuation">:</span> <span
                                                                          class="token punctuation">[</span><span
                                                                          class="token punctuation">]</span><span
                                                                          class="token punctuation">,</span> text<span
                                                                          class="token punctuation">:</span> <span
                                                                          class="token string">''</span> <span
                                                                          class="token punctuation">}</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>handleChange<span
                                                                          class="token punctuation">.</span><span
                                                                          class="token function">bind</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleSubmit <span class="token operator">=</span> <span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>handleSubmit<span
                                                                          class="token punctuation">.</span><span
                                                                          class="token function">bind</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>TODO<span
                                                                          class="token tag"><span class="token tag"><span
                                                                          class="token punctuation">&lt;/</span>h3</span><span
                                                                          class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TodoList</span> <span
                  class="token attr-name">items</span><span class="token script language-javascript"><span
                  class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span
                  class="token punctuation">.</span>state<span class="token punctuation">.</span>items<span class="token punctuation">}</span></span> <span
                  class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span
                  class="token attr-name">onSubmit</span><span class="token script language-javascript"><span
                  class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span
                  class="token punctuation">.</span>handleSubmit<span class="token punctuation">}</span></span><span
                  class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
                    class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation">=</span><span
                    class="token punctuation">"</span>new-todo<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
              What needs to be done<span class="token operator">?</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span
                    class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
              <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span
                        class="token punctuation">"</span>new-todo<span class="token punctuation">"</span></span>
              <span class="token attr-name">onChange</span><span class="token script language-javascript"><span
                        class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span
                        class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
              <span class="token attr-name">value</span><span class="token script language-javascript"><span
                        class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span
                        class="token punctuation">.</span>state<span class="token punctuation">.</span>text<span
                        class="token punctuation">}</span></span>
            <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span
                    class="token punctuation">&gt;</span></span>
              Add #<span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span
                                                                          class="token punctuation">.</span>items<span
                                                                          class="token punctuation">.</span>length <span
                                                                          class="token operator">+</span> <span
                                                                          class="token number">1</span><span
                                                                          class="token punctuation">}</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span
                    class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span
                  class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">handleChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">{</span> text<span
                                                                          class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span
                                                                          class="token punctuation">.</span>value <span
                                                                          class="token punctuation">}</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">handleSubmit</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>state<span
                                                                          class="token punctuation">.</span>text<span
                                                                          class="token punctuation">.</span>length<span
                                                                          class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">const</span> newItem <span class="token operator">=</span> <span class="token punctuation">{</span>
        text<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span
                                                                          class="token punctuation">.</span>text<span
                                                                          class="token punctuation">,</span>
        id<span class="token punctuation">:</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span
                                                                          class="token punctuation">(</span>state <span
                                                                          class="token operator">=</span><span
                                                                          class="token operator">&gt;</span> <span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">{</span>
        items<span class="token punctuation">:</span> state<span class="token punctuation">.</span>items<span
                                                                          class="token punctuation">.</span><span class="token function">concat</span><span
                                                                          class="token punctuation">(</span>newItem<span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">,</span>
        text<span class="token punctuation">:</span> <span class="token string">''</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">TodoList</span> <span class="token keyword">extends</span> <span
                                                                          class="token class-name">React<span
                                                                          class="token punctuation">.</span>Component</span> <span
                                                                          class="token punctuation">{</span>
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span><span class="token punctuation">&gt;</span></span>
          <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span
                                                                          class="token punctuation">.</span>items<span
                                                                          class="token punctuation">.</span><span
                                                                          class="token function">map</span><span
                                                                          class="token punctuation">(</span>item <span class="token operator">=</span><span
                                                                          class="token operator">&gt;</span> <span
                                                                          class="token punctuation">(</span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span
                    class="token attr-name">key</span><span class="token script language-javascript"><span
                    class="token punctuation">=</span><span class="token punctuation">{</span>item<span
                    class="token punctuation">.</span>id<span class="token punctuation">}</span></span><span
                    class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>item<span
                                                                          class="token punctuation">.</span>text<span
                                                                          class="token punctuation">}</span><span class="token tag"><span
                                                                          class="token tag"><span
                                                                          class="token punctuation">&lt;/</span>li</span><span
                                                                          class="token punctuation">&gt;</span></span>
          <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TodoApp</span> <span class="token punctuation">/&gt;</span></span><span
                                                                          class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span
                                                                          class="token string">'todos-example'</span><span
                                                                          class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  </pre>
                                                              </div>
                                                          </div>
                                                          <div class="css-1bx1f1e">
                                                              <div class="css-ljjjy7">
                                                                  <div class="css-1mfng2l">Result</div>
                                                              </div>
                                                              <div id="todos-example" class="css-l12faq">
                                                                  <div><h3>TODO</h3>
                                                                      <ul></ul>
                                                                      <form><label for="new-todo">What needs to be done?</label><input
                                                                              id="new-todo" value="">
                                                                          <button>Add #1</button>
                                                                      </form>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div id="a-component-using-external-plugins" class="css-1hlq8ls">
                                                  <div class="css-7ddkg0"><h3 class="css-17jiu04">A Component Using External Plugins</h3>
                                                      <div><p>React allows you to interface with other libraries and frameworks. This example
                                                          uses <strong>remarkable</strong>, an external Markdown library, to convert the <code
                                                                  class="gatsby-code-text">&lt;textarea&gt;</code>’s value in real time.</p>
                                                      </div>
                                                  </div>
                                                  <div class="react-live">
                                                      <div class="css-1rx7ryx">
                                                          <div class="css-rlak57">
                                                              <div class="css-xj6x4o">
                                                                  <div class="css-109jn6d">Live JSX Editor<label class="css-7qz0p2"><input
                                                                          type="checkbox" checked=""> JSX?</label></div>
                                                              </div>
                                                              <div class="gatsby-highlight css-t5ws0a"><pre class="prism-code"
                                                                                                            spellcheck="false"
                                                                                                            contenteditable="true"><span
                                                                      class="token keyword">class</span> <span class="token class-name">MarkdownEditor</span> <span
                                                                      class="token keyword">extends</span> <span class="token class-name">React<span
                                                                      class="token punctuation">.</span>Component</span> <span
                                                                      class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>handleChange <span class="token operator">=</span> <span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>handleChange<span
                                                                          class="token punctuation">.</span><span
                                                                          class="token function">bind</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span
                                                                          class="token punctuation">{</span> value<span
                                                                          class="token punctuation">:</span> <span class="token string">'Hello, **world**!'</span> <span
                                                                          class="token punctuation">}</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">handleChange</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">{</span> value<span
                                                                          class="token punctuation">:</span> e<span class="token punctuation">.</span>target<span
                                                                          class="token punctuation">.</span>value <span
                                                                          class="token punctuation">}</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">getRawMarkup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">const</span> md <span class="token operator">=</span> <span class="token keyword">new</span> <span
                                                                          class="token class-name">Remarkable</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token punctuation">)</span><span
                                                                          class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> __html<span
                                                                          class="token punctuation">:</span> md<span
                                                                          class="token punctuation">.</span><span class="token function">render</span><span
                                                                          class="token punctuation">(</span><span
                                                                          class="token keyword">this</span><span
                                                                          class="token punctuation">.</span>state<span
                                                                          class="token punctuation">.</span>value<span
                                                                          class="token punctuation">)</span> <span
                                                                          class="token punctuation">}</span><span
                                                                          class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span
                                                                          class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span
                class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MarkdownEditor<span
                class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Input<span
                                                                          class="token tag"><span class="token tag"><span
                                                                          class="token punctuation">&lt;/</span>h3</span><span
                                                                          class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span
                  class="token attr-name">htmlFor</span><span class="token attr-value"><span class="token punctuation">=</span><span
                  class="token punctuation">"</span>markdown-content<span class="token punctuation">"</span></span><span
                  class="token punctuation">&gt;</span></span>
            Enter some markdown
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span
                  class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span>
            <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation">=</span><span
                      class="token punctuation">"</span>markdown-content<span class="token punctuation">"</span></span>
            <span class="token attr-name">onChange</span><span class="token script language-javascript"><span
                      class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span
                      class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span>
            <span class="token attr-name">defaultValue</span><span class="token script language-javascript"><span
                      class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span
                      class="token punctuation">.</span>state<span class="token punctuation">.</span>value<span
                      class="token punctuation">}</span></span>
          <span class="token punctuation">/&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span><span class="token punctuation">&gt;</span></span>Output<span
                                                                          class="token tag"><span class="token tag"><span
                                                                          class="token punctuation">&lt;/</span>h3</span><span
                                                                          class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
            <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span
                      class="token punctuation">"</span>content<span class="token punctuation">"</span></span>
            <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span
                      class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span
                      class="token punctuation">.</span><span class="token function">getRawMarkup</span><span
                      class="token punctuation">(</span><span class="token punctuation">)</span><span
                      class="token punctuation">}</span></span>
          <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MarkdownEditor</span> <span
            class="token punctuation">/&gt;</span></span><span class="token punctuation">,</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span
                                                                          class="token string">'markdown-example'</span><span
                                                                          class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  </pre>
                                                              </div>
                                                          </div>
                                                          <div class="css-1bx1f1e">
                                                              <div class="css-ljjjy7">
                                                                  <div class="css-1mfng2l">Result</div>
                                                              </div>
                                                              <div id="markdown-example" class="css-l12faq">
                                                                  <div class="MarkdownEditor"><h3>Input</h3><label for="markdown-content">Enter
                                                                      some markdown</label><textarea
                                                                          id="markdown-content">Hello, **world**!</textarea><h3>Output</h3>
                                                                      <div class="content"><p>Hello, <strong>world</strong>!</p>
                                                                      </div>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </section>
                                  </div>
                              </div>
                              <section class="css-14dg8zm">
                                  <div class="css-tctv7l">
                                      <div class="css-19z06ao css-1k80xq8">
                                          <div class="css-1ezwgyu"><a class="css-1053yfl"
                                                                      href="https://reactjs.org/docs/getting-started.html">Get Started</a>
                                          </div>
                                          <div class="css-1ezwgyu"><a class="css-13foh4g" href="https://reactjs.org/tutorial/tutorial.html">Take
                                              the Tutorial
                                              <svg height="12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.53657 8.69699"
                                                   class="css-b7q1rs">
                                                  <path d="
          M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
          0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
          0,0,1,.18254,8.697Z
        " fill="currentColor"></path>
                                              </svg>
                                          </a></div>
                                      </div>
                                  </div>
                              </section>
                          </div>
                      </div>
                      <footer class="css-smm72f">
                          <div class="css-tctv7l">
                              <div class="css-17njq4x">
                                  <div class="css-1q9mcvr">
                                      <div class="css-12bsqfj">
                                          <div class="css-1m3wp4q">
                                              <div class="css-109jn6d">Docs</div>
                                              <a class="css-8l81zy" href="https://reactjs.org/docs/getting-started.html">Installation</a><a
                                                  class="css-8l81zy" href="https://reactjs.org/docs/hello-world.html">Main Concepts</a><a
                                                  class="css-8l81zy" href="https://reactjs.org/docs/accessibility.html">Advanced Guides</a><a
                                                  class="css-8l81zy" href="https://reactjs.org/docs/react-api.html">API Reference</a><a
                                                  class="css-8l81zy" href="https://reactjs.org/docs/hooks-intro.html">Hooks (New)</a><a
                                                  class="css-8l81zy" href="https://reactjs.org/docs/how-to-contribute.html">Contributing</a><a
                                                  class="css-8l81zy" href="https://reactjs.org/docs/faq-ajax.html">FAQ</a></div>
                                      </div>
                                      <div class="css-12bsqfj">
                                          <div class="css-1m3wp4q">
                                              <div class="css-109jn6d">Channels</div>
                                              <a href="https://github.com/facebook/react" target="_blank" rel="noopener" class="css-8l81zy">GitHub
                                                  <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                      <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                      <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                                  </svg>
                                              </a><a href="https://stackoverflow.com/questions/tagged/reactjs" target="_blank" rel="noopener"
                                                     class="css-8l81zy">Stack Overflow
                                              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                  <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                  <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                              </svg>
                                          </a><a href="https://discuss.reactjs.org/" target="_blank" rel="noopener" class="css-8l81zy">Discussion
                                              Forum
                                              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                  <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                  <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                              </svg>
                                          </a><a href="https://discord.gg/0ZcbPKXt5bZjGY5n" target="_blank" rel="noopener" class="css-8l81zy">Reactiflux
                                              Chat
                                              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                  <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                  <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                              </svg>
                                          </a><a href="https://dev.to/t/react" target="_blank" rel="noopener" class="css-8l81zy">DEV Community
                                              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                  <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                  <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                              </svg>
                                          </a><a href="https://www.facebook.com/react" target="_blank" rel="noopener" class="css-8l81zy">Facebook
                                              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                  <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                  <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                              </svg>
                                          </a><a href="https://twitter.com/reactjs" target="_blank" rel="noopener" class="css-8l81zy">Twitter
                                              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                  <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                  <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                              </svg>
                                          </a></div>
                                      </div>
                                      <div class="css-12bsqfj">
                                          <div class="css-1m3wp4q">
                                              <div class="css-109jn6d">Community</div>
                                              <a class="css-8l81zy" href="https://reactjs.org/community/support.html">Community
                                                  Resources</a><a class="css-8l81zy"
                                                                  href="https://reactjs.org/community/debugging-tools.html">Tools</a></div>
                                      </div>
                                      <div class="css-12bsqfj">
                                          <div class="css-1m3wp4q">
                                              <div class="css-109jn6d">More</div>
                                              <a class="css-8l81zy" href="https://reactjs.org/tutorial/tutorial.html">Tutorial</a><a
                                                  class="css-8l81zy" href="https://reactjs.org/blog/">Blog</a><a class="css-8l81zy"
                                                                                                                 href="https://reactjs.org/acknowledgements.html">Acknowledgements</a><a
                                                  href="https://facebook.github.io/react-native/" target="_blank" rel="noopener"
                                                  class="css-8l81zy">React Native
                                              <svg x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="css-83uoqv">
                                                  <path fill="currentColor" d="
        M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,
        0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z
      "></path>
                                                  <polygon fill="currentColor" points="
        45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,
        14.9 62.8,22.9 71.5,22.9
        "></polygon>
                                              </svg>
                                          </a></div>
                                      </div>
                                  </div>
                                  <section class="css-1tq073i"><a href="https://code.facebook.com/projects/" target="_blank"
                                                                  rel="noopener"><img alt="Facebook Open Source"
                                                                                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAABaCAMAAADQMV5DAAAC3FBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+GTFYVAAAA9HRSTlMAG7O/KQR48v/+hA5W2+piObG8RBSU/fehIG7stSWl9nkIStbYU0XN4FUvrHoDcOi3OAuLmheOmRVm4rtBNbDucsnfXlDUJpuGB3vtM3+mHBKMEF3FSDzmaMLpWN7PRh2XkAaAo3X4riuiBctS3WAxtvFxEWTkxD4YbKirjzr7H/W5MIHKvrKtyCh3AUsNuKnHaxNOzPlMqqTGn++vniOTCSJJzhZAfKfAhSEuLWU/jSyDwU9DiJY3X9JzujJRRwIewzRnhzZZtFpNkldcvSRbPVQ7KicMDxoZkXagidWCb20K2dflYZ2KleGc0WrQ2vD8mH5p7f+VowAADPFJREFUeAHs0AN7Y2EYhOGJbVu1bdu22+3axp/fYurGyeX3PvZ3HuRFoVSpUU5Co9Xp9QajCaJszBb9NasN5SHsDv0dpwuidG4Pc3p93PoDKJEIhtgyHFFEuReLJ1ACkUwxZEUlLlVV86imFsUSdfWMqGtoBDU180xLK4oh2tr11NH54GSXnrp7UDDR28d6/QN4ZHCI54dHUBgxMMp0Y+N4ZmKS11ITEPmbmmY238ws0pmb5/X6BYj8NC7qaWkZGaxM62l1DSIP6xb22thEFlv9vGt7ByIX+y5j7fUih/0D3nl4BJHN8YmeTleQ09mLGG8+n4LI6OUrVnr9BnlRvNWT8R1EWuZDFnr/AXnbVPGZj58gnvv8hXm+fkM63yNTPUjnx08+9+s3xGOd7Xo6+YPnFv6u/rto1z6A28buPI7/7rBK/nPrXuaCnFaTlcej8eqC9CpbN6KxfcFk30pO4SFVinQjD73VReIWw0XyWc2RL+ICWHtN+1kuKe7l3L1nuvvikmx6771Mr8c8yhhAwAmUwCxT+HHlGzyXr0EP+fivfLwzpTwLvzsffW5k6/NwKXvjCySsNOAnr2pcvWZtV9f0Gau7H10Hv7taSXjuP9djRFnPahImL4Rf79S+7s54R1dlZWtHvH+gbsNn4Te4kYQ5CZQJbyDhvx5CgM8NbVybjs94sdI01zau6Wiur2mdhAArLBLq8Wen2pgAWZLxGiLhpU3wW/Du1Sur0m9t3/y5+15+eUvm0YG6dNXjWz+xDH7bNpOAsenkNqE8GmECOHG8hp4hoqWL4Ld8+9Klw812zfSE8zSvrcndtzsadu6C3+7HiegZjI0kzcX4m476efh8KlnfXpvu6J7R8i447lzR19CfHuru+0IvfGYVElWD199w1C9itI/9x9bK5viahi/tgceWvd374um1NZ37MdoeT9Ry1AOj+xxcPaMqXbn6pWr48EMb+9JVK1d/8jC87ilHHSvq+z4y0JHuan/8CAIlWrfWNw8vHWgpUlSW1DSVAZCZs6RqSQMOOaklZU9UruVXHIxrigH/ij8qk0sR9dNH69PxpTse+gAQbNZ/H+vOVb/3HcWIykwSNAbbhmBIZEkxsjR2+2FMskjiTlTVEltMhhGGTSR2BK14ozLdLkHUD8/paH5rzewlGMO6dzQcSw8f3R49qhGzNBmQFUtnkiSWkiQZAOQU6fLthyJtciSqmd+iWZYBzw7N0pl/xROV6Tp77aMeb+9q3tF6AiFO9n+kuf/oyYhRnb+j+Fk+qkoK8gxLAwwykWdasoiq3G4p6xbL79CcHXrwiogarWmEqKfMHc3H1p5GqKeqpHRdvCJiVE2EEliMJADMsuEmSXAuMEVUMpAngnt3GKQFroio0ZpGiLps9fBQwz0owOl9drxmcJxR3VQAVgoOVURVSIaLIS7LU4gBGmlwmDR6h2n5V5yoomkJorY0xM88BK/eLW1nz35+E4PXKw3xpf9TeFTfOyoGcDIAhyV57kxBI3dgDmiuLaKVd4cavCIuFE1LELXiPSv7G4/DjZ3bn01MmpTInnjbLLjJdbX19dsiPP09yURP/yW2zgWBNO+W/NWWZwcpASsiKtNJRiminj7funaYweW+eRcGM9U5mYuJRBvcLh3r33H2zxxVIjclKCppYSsiKtN1SypJ1Pse73r8/grAseex/U2ZE5dzFmeaBq94buJVOzqvHo8UVSE2OqqVGnWnws0XVQFi7h0seIWTqutMJbMUUTedb600X4Zj02MXm/ZnZ+6+dm3P/Kza1HPkDsDxT1LnjCWRohqkwsFIAmDH/Nm9UTkcKhliR+gKJ/HSSqFk6aP2ztvftHjuulPIWX9tcG7T4GUGx87IUWFJrn4iapK4N3tydFQTDjM2eocUvMJJZ2IDGSWPevx/m/bPfS9GsMVqU/bLRYzquXUMK184pjNnyQBsy3nIDBHVSnqKe3aopPpXPC/+LbnEUd8+OJi5cA2Of0hU91z/YDGjQrqdiFuaJIlSrveaKYBZuuy8gRJRk2KLuFLCqB2WGbTiRBW/HCtt1OezmRMz4XLjeiZ7X1GjMomkJOdJm1KQbjeyNA6WlCglHupWioPxFIm6GiEptqgmSQyuHbJqix1BK05UGJZZ2qg3E9WJm3C5lq2etCBCVF2FT1KnHIkDKRsC02KUY3PkKeIKPSkeqDFxBJUTEwuuHZbYEbgiW4bz+1mljfrIpOrENbgsv95zfVGEqMFkzhm8GDfgZhjw4lwevUNG2IqjlFHP5qJu8oyyhEYtC4u6J1GdXQeXTbmn/7ly1EhR5Wxm8XzPUPC86uyt6FEZ5xzFxDmX/1qifkW9mLkgw7Et0dMzaVbEqHIqlp/BVliRitr0J7GU/FcRFQuyGVVlzsvWi4ubLnNEi6pYlpnknCsSWSqKIEW6wjlPmkTaX0XUryYGT849sQvCBy7Oa7qY/Wy0qCaZDHlcpyQiS5KCPNkm5a8hKm5d6WlSLy+649Wv3Xp20uKm6oW7Ix2oIOXuyMwiVI3ZcBgMBSj90d+ShYNN1dcvX8997Wm6+Ni00Ud/j4wrqkoa3KK/EzdIRQQlOqTeMy/Rk6nu6anO9FxOLIHb148NSeM7pI5J8JDJdOYb/AMShiKGLAQxaMEVjbPw0RPfbIUBh8ycBaZqLGx0oyhRK+7v619qwG3WsuvZSdevT8pO4l+D2+m6Wnv68vFE5aTCyyQGQLMCBiTUGOkSkSmLR7b9pwVJIkp5ssqkwMc3SWHgNslGjqUAmkXEw0Y3ihIV3+iOn3kdvN5739lFi87dehe8nu6Of2R8H/ylLP+zNxk8IAGTUrJIm1+QpJHDKcXS4SZZBhwhkxTO54qkwSRTlUNHN4oTdf7G4c6GNhTg1X12la6OK6pkYzRLCx6QUCjpDFmIrSJuPpEGR/48isERPEnhj5qyOMJHN4oUtcJck65r/ThCsW/uSB8bfnBcUUnzd5YQPCCheW9m587xfeBiSES2xiEET1L4o4r7O3x0o0hRsUCvbd5nfwwhlg2dae6fk0GRovoHJJj3sz+JXM9uAx7cjBGRLaoHT1L4oorfMHx0o1hRseHe3IBa+7cMjOHWqsa6dHyrhmJEDRuQUMiJ4VwwmqymYhQT64GTFL6oIlj46EaxouKBe+ubO5Yufd17EQy9b7zaPdTc9e1LEKL+nxo4IGFyh0I8LKqgxkhF8CSFL6r4Pnx0o3hRsWLHi8NVte32hTcjyOLhGrsq/pGlb6oYb1TTCn7t7o9KHkZBUcFiMQRPUviiimvCRzeKGBW7L23Mjae/deM3vwifw4dqjuXG0ze+c9r4x9NVSsIrZTF/VMU3UlFYVCTJCJ6kCI4aOroRKep8jKZ+s+Yf03Hpxe+0wWPLmxr3xdP17f0JjPb5Qt5RxeDBLBPBAxL6RKJy4v5JCu8G3RM1ZHQjUtR18Kn4wlvba5uHGqTvMjgefF9dQ2d6aGDN974PH1bQe/+UN5XFggckFJInEFUl2T9J4XnXxcgTNWR0I1LUlW+D3y5tx5l42t46NHc98nqaa6ZXVe1ofOAm/Nr6C4gKkxTPIxUIHJBgrlMCWR4jqiQxT8LA2QpdxwjNGzVkdGPCSPj6LPide0/Nyqp0X83sk/Ldd3/8wJfaZ1SlH9ffwOH34E4SEF7VlpEnS6Jf8IAEd04BuGWPETVJMdXzbxQ0W6GScnvB+/QPGd2YsH4SpqxAgHnD7fXpeF3jdNO0l64ZTnfVdB15M/ySMRLOI5RGlD/5tynGIQQOSKhWTDHEOITJxogqDkBSKudciVEycJJC5DY5wE3LkDxRQ0Y3Ju76D0j4YQ/8vr9hTXdnVYddWWl3VA0N7GiZBb8vD5Dwox9jYp9RaRQ0IJFyj1SIQQvfYITAbYucK4MmKZyJDVNGykROfjAjdHQjglPbX09CRxv87th7pv2Y3TnUtbJ96TuWwG/XT0h47uCdwMQ+TdUoeEACzkL4OAYPm6TwjmeEj25Ete0lyvvp3fBb0PKz6TPWnP/Ev95AgO3PkTB0FyZMI/wtmjmDhJ8/jSAfv2fJrvUIkJ1DwsB+oBzV58i/k9BwAAU7d4yEf/kegpSj4lM7P0PCL9ahIK9+kvI2z0I0agx/s+QhyltVgXBPfoaEx9tQNpbMAAmTryCEupWEX15HWZhXppCw420YQ9taEl5oQQHKPvhuypv96v97yU8p7/7nUZiym10k/PM3EOhX/0ZC3WEUruzEVhJ+fR0+TWdI+M2PMT5lLb8lodKAx7U4Cb9bhXEr+9rvKe9b2+D4yh9+R0LzXZiIsuPHSHj9BoxY+BYSBpZhosqu/IaE7owYn6gj4Zk/oiwC5wiq9r3f/wXlHXwZZdFs+iYJD3+IhM7dKIvuxkfIofegrDj++HMSPtqCsqKp+JY44Hs7yorp5rHGZ1Gosv8DnDgXp7vdFQUAAAAASUVORK5CYII="
                                                                                      class="css-1izr7si"></a>
                                      <p class="css-1yy5aal">Copyright © 2019 Facebook Inc.</p></section>
                              </div>
                          </div>
                      </footer>
                  </div>
              </div>
          </div>
      </body>
  </html>
`;
