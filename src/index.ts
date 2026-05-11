import { Elysia } from "elysia";
import { db } from "./db";
import { users } from "./db/schema";

const app = new Elysia()
  .get("/", () => "Welcome to WebCafe API")
  .get("/users", async () => {
    try {
      return await db.select().from(users);
    } catch (error) {
      console.error("Database connection error:", error);
      return { error: "Database connection failed" };
    }
  })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
