import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";


// https://astro.build/config
export default defineConfig({
    redirects: {
        '/article/[slug].html': {
            status: 302,
            destination: '/article/[slug]'
        }
    },
    site: 'https://mmilunicmobile.github.io',
    integrations: [mdx({
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
    }), solidJs(), tailwind({
        applyBaseStyles: false
    })]
});