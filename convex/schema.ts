import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Products table
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    image: v.string(),
    category: v.string(),
    stock: v.number(),
    // Translation keys for multilingual support
    nameKey: v.string(),
    descriptionKey: v.string(),
    categoryKey: v.string(),
    createdAt: v.string(),
    updatedAt: v.string(),
  }),

  // Translations table
  translations: defineTable({
    key: v.string(),
    language: v.string(),
    value: v.string(),
  }).index("by_key_and_language", ["key", "language"]),

  // Languages table
  languages: defineTable({
    code: v.string(),
    name: v.string(),
    isDefault: v.boolean(),
    isEnabled: v.boolean(),
  }).index("by_code", ["code"]),

  // Users table for admin access
  users: defineTable({
    email: v.string(),
    name: v.optional(v.string()),
    role: v.string(), // "admin" or "user"
    createdAt: v.string(),
  }).index("by_email", ["email"]),
});
