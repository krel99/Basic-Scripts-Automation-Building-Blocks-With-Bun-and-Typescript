// bun 001-011/004-url.ts
// bun 001-011/004-url.ts https://bun.sh/docs/runtime/nodejs-apis#node-url
// url module
import { parse, format, UrlWithParsedQuery } from "url";

const args = process.argv.slice(2);
const [urlEntered] = args;

if (urlEntered === undefined) {
  console.error("Please enter a URL, for example https://nodejs.org/api/querystring.html");
}
const { protocol, slashes, host, query, href } = parse(urlEntered, true);

console.log(`Protocol: ${protocol}`);
console.log(`Slashes: ${slashes}`);
console.log(`Host: ${host}`);
console.log(`Query: ${query}`);
console.log(`Href: ${href}`);
