// bun 003-queryString.ts
// querystring module
import { parse, stringify, ParsedUrlQuery } from "querystring";

//building a query string
const apiHost = "https://jira.my-company.com/rest/api/latest/search?jql=";
const jqlParams: ParsedUrlQuery = {
  assignee: "krel",
  startAt: "2",
  maxResults: "2",
};

const apiUrl = `${apiHost}${stringify(jqlParams)}`;

console.log(apiUrl);

//parsing a query string
const parsedUrlArgs = parse(apiUrl.substring(apiUrl.indexOf("jql") + 4));

const assignee = parsedUrlArgs.assignee;
const startAt = parsedUrlArgs.startAt;
const maxResults = parsedUrlArgs.maxResults;

if (assignee && typeof assignee === "string") {
  console.log(`Name of the assignee: ${assignee.charAt(0).toUpperCase() + assignee.slice(1)}`);
}
console.log(`Value of startAt: ${startAt}`);
console.log(`Value of maxResults: ${maxResults}`);
