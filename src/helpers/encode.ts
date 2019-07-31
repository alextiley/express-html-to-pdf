export const asDataUri = (html: string) => {
  const asBase64 = Buffer.from(html).toString('base64');
  return `data:text/html;base64,${asBase64}`;
};
