<template>
  <div v-if="post">
    <h1 class="font-bold text-4xl my-14 text-balance text-center">
      {{ post.title }}
    </h1>
    <div
      class="prose prose-lg max-w-4xl content-div"
      v-html="post.content"
    ></div>
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
</script>

<style>
.content-div img {
  width: 100%;
}
</style>
