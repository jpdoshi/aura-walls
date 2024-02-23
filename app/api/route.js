import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;
let walls = null;

export async function GET(req, res) {
  if (!db) {
    db = await open({
      filename: "./db.sqlite3",
      driver: sqlite3.Database,
    });
  }

  const walls = await db.all("SELECT * FROM WALLPAPER");

  return new Response(JSON.stringify(walls), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}