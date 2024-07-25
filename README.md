# A Minimalist Nuxt.js 3.12 Blog Starter Template - Backed by Wisp CMS<!-- omit in toc -->

[![Demo Travel Blog on Nuxt 3.12](https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/2aadc720-9ac6-40ab-8e59-dbcb724e2bbe.png/public "Demo Travel Blog using Nuxt 3.12")](https://nuxt-blog-starter-wisp.vercel.app/)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Wisp-CMS/nuxt-blog-starter-wisp/) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FWisp-CMS%2Fnuxt-blog-starter-wisp&demo-title=Demo%20Travel%20Blog&demo-description=Demo%20travel%20blog%20using%20Nuxt%203&demo-url=https%3A%2F%2Fnuxt-blog-starter-wisp.vercel.app%2F&demo-image=https://imagedelivery.net/lLmNeOP7HXG0OqaG97wimw/cluqyx1rl0000l5ds3f0vkfer/2aadc720-9ac6-40ab-8e59-dbcb724e2bbe.png/public)

**Featured Links**

- [Demo Blog](https://nuxt-blog-starter-wisp.vercel.app/)
- [Editing Experience](https://youtu.be/uSKO8J38T98)
<!-- - [Documentation](https://www.wisp.blog/docs/next-js-blog-starter-kit/overview) -->
<!-- - [Video Tutorial](https://www.wisp.blog/docs/next-js-blog-starter-kit/running-blog) -->
<!-- - [Feature Walkthrough](https://youtu.be/7wVYAGhDmdY) -->

This is a [Nuxt.js](https://nuxt.com/), [Tailwind CSS](https://tailwindcss.com/) blog starter template. This version is using Nuxt 3.12 and uses [Wisp](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nuxt-blog-starter-wisp) for publishing blog posts.

Probably the most feature-rich Nuxt.js blog template out there that is easily configurable and customizable. It's perfect as an upgrade from blogs using Jekyll, Hugo, Gatsby, Contentlayer, or ContentCollections.

## About Wisp

Wisp is a modern CMS for adding blogs to websites. It features an intuitive, medium-like editorial experience so that you can focus on writing instead of getting distracted by markdown.

## Features

- Beautiful blog starter kit
- Responsive layout for mobile devices
- Filter blog posts by tags
- About page
- Automatic [Related Posts suggestions](https://www.wisp.blog/blog/suggesting-related-blog-post-with-ai-content-recommendation)

## Technologies

- [Nuxt.js 14](https://nuxt.com/) using TypeScript
- [Wisp](https://wisp.blog/?utm_source=github&utm_medium=web&utm_campaign=nuxt-blog-starter-wisp) to manage blog posts
- [Tailwind CSS](https://tailwindcss.com/) for CSS framework
- [ESLint](https://eslint.org/) for static analysis
- [TypeScript](https://www.typescriptlang.org/) for type safety

## Quick Start Guide

First, install the dependencies:

```bash
# npm
npm i

# bun
bun i
```

Then, update the blog id in the `plugins/wisp.ts` with the Blog ID obtained from wisp after you've created an account:

```bash
export const wisp = buildWispClient({
  baseUrl: "https://www.wisp.blog",
  blogId: "<YOUR_BLOG_ID_HERE>",
});
```

Finally, run the development server:

```bash
# npm
npm run dev

# bun
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Getting Help

Full documentation on how to get started on wisp is available on [wisp's documentation site](https://www.wisp.blog/docs?utm_source=github&utm_medium=web&utm_campaign=nuxt-blog-starter-wisp)

