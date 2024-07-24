<template>
  <div class="flex items-center gap-x-4 text-xs">
    <a
      v-for="tag in tags"
      :key="tag.id"
      :href="`/tag/${tag.name}`"
      class="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-200"
    >
      {{ tag.name }}
    </a>
  </div>
</template>

<script setup>
defineProps({
  tags: {
    type: Array,
    default: () => [], // Added default value for 'tags'
  },
});
</script>
