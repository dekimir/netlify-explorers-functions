import type { Context } from "https://edge.netlify.com"
import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB(':memory:')

export default function(req: Request, ctx: Context): Response {
  if (req.method == 'POST') {
    db.execute("CREATE TABLE IF NOT EXISTS tbl (val text)")
    const spl = req.url.split('?')
    const val = spl.length > 1 ? spl[1] : 'default'
    db.query('INSERT INTO tbl(val) VALUES (?)', [val])
    return new Response(`Inserted ${val}`)
  } else {
    return new Response(JSON.stringify(db.query('SELECT val FROM tbl'), ['val'], 2))
  }
}
