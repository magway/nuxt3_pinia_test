<template>
  <div class="my-input">
    <label :for="name" class="my-input__label">{{ label }}</label>
    <div class="my-input__field-wrapper mt-2">
      <input
        :id="name"
        :value="modelValue"
        :name="name"
        :type="type"
        autocomplete="email"
        required=""
        class="my-input__field"
        @input="
          emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
      />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  label: string;
  name: string;
  type: string;
  modelValue: string;
}
defineProps<Props>();

const emit = defineEmits<{
  (event: "update:modelValue", payload: string): void;
}>();
</script>

<style lang="scss">
.my-input__label {
  @apply block text-sm font-medium leading-6 text-gray-900;
}
.my-input__field {
  @apply block w-full rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300;
  @apply py-1.5 text-gray-900 sm:text-sm sm:leading-6;
  @apply focus:ring-2 focus:ring-inset focus:ring-indigo-600;
}
.my-input__field-wrapper {
  @apply mt-2;
}
</style>
