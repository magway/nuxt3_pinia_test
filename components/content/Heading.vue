<template>
  <div class="heading">
    <h3 class="heading__title">
      {{ heading }}
    </h3>
    <p v-if="true" class="heading__subtitle">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  heading: string;
  subtitle?: string;
}>();
</script>

<style lang="scss">
.heading {
  @apply px-4 sm:px-0 pb-6;
}
.heading__title {
  @apply text-base font-semibold leading-7 text-gray-900;
}
.heading__subtitle {
  @apply mt-1 max-w-2xl text-sm leading-6 text-gray-500;
}
</style>
