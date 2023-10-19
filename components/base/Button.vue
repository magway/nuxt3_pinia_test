<template>
  <button :class="classes" :disabled="disabled" @click="onBtnClick">
    <IconLoader v-if="loading" />
    <span v-if="!loading">{{ title }}</span>
  </button>
</template>

<script setup lang="ts">
export interface Props {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits(["button-click"]);

const onBtnClick = () => {
  emit("button-click");
};

const classes = computed(() => ({
  "my-btn": true,
  "my-btn--loading": props.loading,
  "my-btn--disabled": props.disabled,
  "my-btn--full-width": props.fullWidth,
}));
</script>

<style lang="scss">
.my-btn {
  @apply flex justify-center rounded-md bg-indigo-600 shadow-sm;
  @apply px-3 py-1.5 text-sm font-semibold leading-6 text-white;
  @apply hover:bg-indigo-500;

  &--disabled {
    @apply bg-indigo-300 hover:bg-indigo-300;
  }

  &--full-width {
    @apply w-full;
  }
}
</style>
