<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="markdown-content" v-html="markdown.render(source)" />
</template>

<script setup lang="ts">
import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt();

defineProps({
  source: {
    type: String,
    default: "",
  },
});
</script>
