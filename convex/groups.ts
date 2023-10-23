import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("groups").collect();
  },
});

export const getGroup = query({
  args: { id:v.id('groups') },
  handler: async (ctx, { id }) => {
    return await ctx.db
      .query("groups")
      .filter((q) => q.eq(q.field("_id"), id))
      .unique();
  },
});

export const create = mutation({
  args: {
    description: v.string(),
    icon_url: v.string(),
    name: v.string(),
  },
  handler: async ({ db }, args) => {
    await db.insert("groups", args);
  },
});
