<template>
  <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="border-b border-gray-200">
      <div class="flex h-16 items-center">
        <div class="ml-4 flex lg:ml-0">
          <img class="h-8 w-auto" src="//placekitten.com/100/100" alt="logo" />
        </div>
        <div class="lg:ml-8 lg:self-stretch">
          <div class="flex h-full space-x-8">
            <NuxtLink
              to="/public"
              class="relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-transparent text-gray-700 hover:text-gray-800"
              >Public CV</NuxtLink
            >
            <NuxtLink
              v-if="authenticated"
              to="/protected"
              class="relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out border-transparent text-gray-700 hover:text-gray-800"
              >Protected Users List</NuxtLink
            >
          </div>
        </div>
        <div class="ml-auto flex items-center">
          <NuxtLink
            v-if="!authenticated"
            to="/"
            class="text-sm font-medium text-gray-700 hover:text-gray-800"
            >Log in <span>&rarr;</span></NuxtLink
          >
          <NuxtLink
            v-if="authenticated"
            class="text-sm font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
            @click="logout"
            >Log out</NuxtLink
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

const router = useRouter();

const { logUserOut } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const logout = () => {
  logUserOut();
  router.push("/");
};
</script>

<style scoped>
.router-link-active {
  @apply border-indigo-600 text-indigo-600;
}
</style>
