import type { Context } from "https://edge.netlify.com"
import { Database } from "https://deno.land/x/sqlite3@0.6.1/mod.ts";

export default function(req: Request, ctx: Context): Response {
  const db = new Database("test.db")
  return new Response(JSON.stringify(db.prepare('SELECT val FROM tbl').all(), ['val'], 2))
}
