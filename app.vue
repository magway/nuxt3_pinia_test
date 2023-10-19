<template>
  <div class="page-container">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "min-h-screen",
  },
  htmlAttrs: {
    class: "min-h-screen bg-white",
  },
});
</script>

<style lang="scss">
#__nuxt {
  @apply min-h-screen;
}
.page-container {
  @apply min-h-screen grid grid-rows-[auto_1fr_auto];
}
</style>
