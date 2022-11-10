import type { Context } from "https://edge.netlify.com"
import { DB } from "https://deno.land/x/sqlite@v3.3.1/mod.ts";

export default function(req: Request, ctx: Context): Response {
  const db = new DB("test.db")
  return new Response(JSON.stringify(db.query('SELECT val FROM tbl'), ['val'], 2))
}
