<template>
  <article class="relative isolate flex flex-col gap-8 lg:flex-row">
    <div
      class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
    >
      <a :href="`/post/${post.slug}`">
        <img
          :src="post.image"
          alt=""
          class="absolute h-full w-full rounded-2xl bg-gray-50 object-cover"
        >
      </a>
      <div class="absolute rounded-2xl ring-1 ring-inset ring-gray-900/10" />
    </div>
    <div class="flex justify-between flex-col">
      <div>
        <div class="flex items-center gap-x-4 text-xs">
          <time :datetime="post.createdAt" class="text-gray-500">
            {{ format(post.createdAt, "MMMM dd, yyyy") }}
          </time>
        </div>
        <div class="max-w-xl prose prose-a:no-underline">
          <h3 class="mt-3 line-clamp-2">
            <a :href="`/post/${post.slug}`">
              {{ post.title }}
            </a>
          </h3>
          <p class="mt-5 line-clamp-4">
            {{ post.description }}
          </p>
        </div>
      </div>
      <div class="mb-4 mt-8">
        <TagList :tags="post.tags" />
      </div>
    </div>
  </article>
</template>

<script setup>
import { format } from "date-fns";

defineProps({
  post: {
    type: Object,
    default: () => ({}),
  },
});
</script>
