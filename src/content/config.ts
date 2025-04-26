import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    featuredImage: z.string().optional(),
    publishDate: z.string(),
    publish: z.boolean().default(true),
    categories: z.array(
      z.enum([
        '大模型', '智能体', '数据标注'
      ])
    ).optional(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  blog,
};