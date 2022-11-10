import type { Context } from "https://edge.netlify.com"
import { DB } from "https://deno.land/x/sqlite/mod.ts";

export default function(req: Request, ctx: Context): Response {
  const db = new DB("test.db")
  db.execute("CREATE TABLE IF NOT EXISTS tbl (val text)")
  const spl = req.url.split('?')
  const val = spl.length > 1 ? spl[1] : 'default'
  db.query('INSERT INTO tbl(val) VALUES (?)', [val])
  return new Response(`Inserted ${val}`)
}
