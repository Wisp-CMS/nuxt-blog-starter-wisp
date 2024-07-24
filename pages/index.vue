<template>
  <div class="my-20 space-y-20">
    <article
      v-for="post in posts"
      :key="post.id"
      class="relative isolate flex flex-col gap-8 lg:flex-row"
    >
      <div
        class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
      >
        <a :href="`/posts/${post.slug}`">
          <img
            :src="post.image"
            alt=""
            class="absolute h-full w-full rounded-2xl bg-gray-50 object-cover"
          />
        </a>
        <div class="absolute rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div class="flex justify-between flex-col">
        <div>
          <div class="flex items-center gap-x-4 text-xs">
            <time :datetime="post.createdAt" class="text-gray-500">{{
              format(post.createdAt, "MMMM dd, yyyy")
            }}</time>
          </div>
          <div class="group relative max-w-xl">
            <h3
              class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"
            >
              <a :href="`/posts/${post.slug}`">
                <span class="absolute inset-0 line-clamp-2" />
                {{ post.title }}
              </a>
            </h3>
            <p class="mt-5 text-sm leading-6 text-gray-600 line-clamp-4">
              {{ post.description }}
            </p>
          </div>
        </div>
        <div class="flex items-center gap-x-4 text-xs mb-4 mt-8">
          <div v-for="tag in post.tags" :key="tag">
            <a
              :key="tag.id"
              href="#"
              class="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
              >{{ tag.name }}</a
            >
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { wisp } from "~/plugins/wisp";
import { format } from "date-fns";

const { posts } = await wisp.getPosts({ limit: "all" });
</script>
