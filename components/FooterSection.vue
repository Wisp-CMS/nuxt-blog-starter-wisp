<template>
  <footer>
    <div class="text-sm text-gray-400 text-center my-6">
      <a
        :href="`https://www.wisp.blog/?utm_medium=web&utm_source=nuxt-js-template&utm_campaign=${currentPage}`"
        >Blog powered by wisp</a
      >
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return window && window.location
        ? window.location.href
        : "nuxt-js-template";
    },
  },
};
</script>
