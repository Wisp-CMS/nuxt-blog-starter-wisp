import { buildWispClient } from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: process.env.PUBLIC_BLOG_ID || "",
});

export default defineNuxtPlugin(() => {});
