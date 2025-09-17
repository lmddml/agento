import { Client } from "pg";

export async function queryOnePlusTwo(): Promise<number> {
  const connectionString = "postgresql://postgres:example@localhost:5432/postgres";

  const client = new Client({connectionString});

  await client.connect();
  try {
    const { rows } = await client.query<{ sum: number }>("SELECT 1 + 2 AS sum");
    const row = rows[0];
    if (!row) throw new Error("Query returned no rows.");
    return row.sum;
  } finally {
    await client.end();
  }
}

try {
  const result = await queryOnePlusTwo();
  console.log(`Query result: ${result}`);
} catch (error) {
  console.error("Failed to query 1 + 2 from the database.", error);
  process.exitCode = 1;
}
