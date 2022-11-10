import type { Context } from "https://edge.netlify.com"
import { Database } from "https://deno.land/x/sqlite3@0.6.1/mod.ts";

export default function(req: Request, ctx: Context): Response {
  const db = new Database("test.db")
  db.run("CREATE TABLE IF NOT EXISTS tbl (val text)")
  const spl = req.url.split('?')
  const val = spl.length > 1 ? spl[1] : 'default'
  db.prepare('INSERT INTO tbl(val) VALUES (?)').run(val)
  return new Response(`Inserted ${val}`)
}
