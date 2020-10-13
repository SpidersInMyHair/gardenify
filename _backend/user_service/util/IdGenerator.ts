const md5 = require('md5');

export function generate(email: string): string {
  const hexString = md5(email).substring(0, 16);
  const base64String = Buffer.from(hexString, 'hex').toString('base64').replace(/\//g, "_");
  return `u${base64String}`;
}