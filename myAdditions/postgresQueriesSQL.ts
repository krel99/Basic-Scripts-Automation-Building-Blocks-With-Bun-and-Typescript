// bun utility/databaseUtilities.ts
// ! postgress server needs to be running for this to work
// sudo systemctl start postgresql@14-main
// sudo systemctl stop postgresql@14-main
// sudo systemctl restart postgresql@14-main
// sudo systemctl status postgresql@14-main

import { Pool } from "pg";
import colors from "colors";
colors.enable();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "scraping",
  password: "postgres",
  port: 5432,
});

const SQL_createTable = `
CREATE TABLE IF NOT EXISTS mytable (
  id SERIAL PRIMARY KEY,
  article_title VARCHAR(255),
  article_body TEXT,
  article_url VARCHAR(255) UNIQUE,
  scraped_date TIMESTAMP DEFAULT NOW()
);`;

const SQL_populateRow = `
INSERT INTO tableName (article_title, article_body, article_url)
VALUES ($1, $2, $3);
`;

export async function createTable(tableName: string) {
  const client = await pool.connect();
  try {
    const SQL_QUERY = SQL_createTable.replace("mytable", tableName);
    console.log(SQL_QUERY.blue);
    await client.query(SQL_QUERY, ["article_title", "article_body", "article_url"]);
    console.log("Table created successfully.".green);
  } catch (err) {
    console.error(err);
  } finally {
    client.release();
  }
}

export async function insertData(table_name: string, article_url: string, article_title?: string, article_body?: string) {
  const client = await pool.connect();
  try {
    await client.query(SQL_populateRow.replace("tableName", table_name), [article_title, article_body, article_url]);
    console.log("Row added to the table successfully.");
  } catch (err: any) {
    console.error(err.message);
  } finally {
    client.release();
  }
}

createTable("glglgg");
insertData("glglgg", "glglgg", "glglgg", "glgfxghfghlgg");
