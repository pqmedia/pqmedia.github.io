import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";


/* =========================================
   BLOG COLLECTION
========================================= */

const blog = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/blog",
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    pubDate: z.coerce.date(),

    category: z.enum([
      "Welding",
      "Shop Tools",
      "Fabrication",
      "Machining",
      "Workshop Tips",
    ]),

    image: z.string(),

    imageAlt: z.string(),

    readTime: z.string().optional(),

    featured: z.boolean().default(false),

    draft: z.boolean().default(false),
  }),
});


/* =========================================
   PROJECTS COLLECTION
========================================= */

const projects = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/data/projects",
  }),

  schema: z.object({
    title: z.string(),

    description: z.string(),

    pubDate: z.coerce.date(),

    category: z.enum([
      "Shop Tools",
      "Welding",
      "Fabrication",
      "Machining",
      "Workshop",
    ]),

    image: z.string(),

    imageAlt: z.string(),

    youtube: z.string().optional(),

    material: z.string().optional(),

    processes: z
      .array(z.string())
      .default([]),

    difficulty: z
      .enum([
        "Beginner",
        "Intermediate",
        "Advanced",
      ])
      .optional(),

    featured: z.boolean().default(false),

    shopTool: z.boolean().default(false),

    draft: z.boolean().default(false),
  }),
});


/* =========================================
   EXPORT COLLECTIONS
========================================= */

export const collections = {
  blog,
  projects,
};