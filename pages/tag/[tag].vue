<template>
  <div>
    <h1 class="font-bold text-4xl my-14 text-balance text-center">
      Posts Tagged: {{ route.params.tag }}
    </h1>
    <div class="my-20 space-y-20">
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { wisp } from "~/plugins/wisp";

const route = useRoute();
const { posts } = await wisp.getPosts({ tags: [route.params.tag] });
</script>
