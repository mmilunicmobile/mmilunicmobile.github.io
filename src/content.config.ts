import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const article = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/article', pattern: '**/[!_]*.{md,mdx}' }),
});

export const collections = { article };