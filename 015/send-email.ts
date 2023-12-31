// bun 015/send-email.ts "subject" "body"
// nodemailer

// if using google, you need to allow less secure apps if running with no two factor auth
// if you use two factor auth, you need to create an app password
// password must be kept secure, do not commit to git with config.json file that includes your real password

import fs from "fs";
import nodemailer from "nodemailer";
import path from "path";

const configFilePath = path.join(process.cwd(), "015", "config.json");
const jsonDataLoaded = JSON.parse(fs.readFileSync(configFilePath, "utf8"));

console.log(jsonDataLoaded);

const args = process.argv.slice(2);
const REQUIRED_ARGS = 2;

if (args.length < REQUIRED_ARGS) {
  console.error("Missing arguments");
  process.exit(0);
}

const [subject, body] = args;
const { host, port, from, to } = jsonDataLoaded;

const transporter = nodemailer.createTransport({
  host,
  port,
  secure: false,
  auth: {
    user: jsonDataLoaded.auth.user,
    pass: jsonDataLoaded.auth.password,
  },
});

const message = {
  from: from,
  to: to,
  subject: subject,
  html: `<p>${body}</p>`,
};

transporter.sendMail(message, (error, info) => {
  if (error) {
    console.log(error);
    process.exit(0);
  }
  console.log("Email sent");
  process.exit(1);
});
