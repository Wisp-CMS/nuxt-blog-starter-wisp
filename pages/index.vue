<template>
  <div class="my-20 space-y-20">
    <PostCard v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup>
import { wisp } from "~/plugins/wisp";

const { posts } = await wisp.getPosts({ limit: "all" });
</script>
