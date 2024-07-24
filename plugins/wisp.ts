import { buildWispClient } from "@wisp-cms/client";

export const wisp = buildWispClient({
  baseUrl: "https://www.wisp.blog",
  blogId: "clvlugru90000o4g8ahxp069s",
});

export default defineNuxtPlugin(() => {});
