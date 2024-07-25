<template>
  <div v-if="post">
    <h1 class="font-bold text-4xl my-14 text-balance text-center">
      {{ post.title }}
    </h1>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="prose prose-lg max-w-4xl content-div" v-html="post.content" />
    <div class="my-8">
      <TagList :tags="post.tags" />
    </div>
    <div class="prose mx-auto max-w-none my-10">
      <h3>Also read</h3>
      <p v-for="relatedPost in relatedPosts" :key="relatedPost.id">
        <NuxtLink :to="`/post/${relatedPost.slug}`">{{
          relatedPost.title
        }}</NuxtLink>
      </p>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script setup>
import { wisp } from "~/plugins/wisp";
import { useRoute } from "vue-router";

const route = useRoute();
const { post } = await wisp.getPost(route.params.slug);
const { posts: relatedPosts } = await wisp.getRelatedPosts({
  slug: route.params.slug,
  limit: 3,
});
</script>

<style>
.content-div img {
  width: 100%;
}
</style>
