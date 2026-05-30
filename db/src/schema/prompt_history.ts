import { pgTable, text, serial, timestamp, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { templatesTable } from "./templates";

export const promptHistoryTable = pgTable("prompt_history", {
  id: serial("id").primaryKey(),
  templateId: integer("template_id").references(() => templatesTable.id, { onDelete: "set null" }),
  templateKeyword: text("template_keyword"),
  templateTitle: text("template_title"),
  userInput: text("user_input").notNull(),
  assembledPrompt: text("assembled_prompt").notNull(),
  response: text("response").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertPromptHistorySchema = createInsertSchema(promptHistoryTable).omit({ id: true, createdAt: true });
export type InsertPromptHistory = z.infer<typeof insertPromptHistorySchema>;
export type PromptHistory = typeof promptHistoryTable.$inferSelect;
