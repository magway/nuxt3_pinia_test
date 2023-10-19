<template>
  <div class="py-12">
    <ContentHeading
      heading="Users List"
      subtitle="Contain list of user cards, taken from https://randomuser.me. (Max 25 users)"
    />
    <div class="divide-y divide-gray-100">
      <UserCard
        v-for="user in users"
        :key="user.email"
        :user="user"
        class="flex justify-between gap-x-6 py-5"
      />
    </div>
    <div class="mt-6">
      <BaseButton
        title="Load More"
        :loading="loading"
        :disabled="disableButton"
        full-width
        @button-click="loadMoreUsers"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useUsersStore } from "~/stores/users";

const MAX_PAGES = 5;

const usersStore = useUsersStore();
const { fetchUsers } = usersStore;
const { users, currentPage, loading } = storeToRefs(usersStore);

const loadMoreUsers = async (): Promise<void> => {
  currentPage.value++;
  await fetchUsers();
};

const disableButton = computed(() => {
  return loading.value || currentPage.value >= MAX_PAGES;
});

await fetchUsers();
</script>
