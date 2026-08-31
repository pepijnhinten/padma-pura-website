import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const activityEventSchema = z.object({
  title: z.string(),
  date: z.coerce.date().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  location: z.string().optional(),
  practicalNote: z.string().optional(),
});

const activities = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/activities' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    activityType: z.enum([
      'rinpoche-visit',
      'tsog',
      'tsetar',
      'gutor',
      'other',
    ]),
    publicationStatus: z.enum(['draft', 'published']),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    location: z.string().optional(),
    practicalInformation: z.string().optional(),
    events: z.array(activityEventSchema).optional(),
  }),
});

export const collections = { activities };