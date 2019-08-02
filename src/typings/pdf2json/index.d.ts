declare module 'pdf2json' {
  class PDFParser {
    constructor();

    parseBuffer: (buffer: Buffer) => void;
    on: (event: string, callback: (data: any) => void) => void;
  }

  export default PDFParser;
}
