<template>
  <div class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img
        class="h-12 w-12 flex-none rounded-full bg-gray-50"
        :src="user.avatarUrl"
        alt=""
      />
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">
          {{ user.fullName }}
        </p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">
          {{ user.dateOfBirth }}
        </p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <a class="text-sm leading-6 text-gray-900">{{ user.email }}</a>
      <p class="text-sm leading-6 text-gray-900">{{ user.location }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  user: User;
}>();
</script>
