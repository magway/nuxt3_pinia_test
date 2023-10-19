<template>
  <div
    class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
  >
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2
        class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
      >
        Login in to your account
      </h2>
    </div>
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <!-- TODO: use form-->
      <div class="space-y-6">
        <BaseInput
          v-model="user.email"
          label="Email"
          name="email"
          type="email"
        />
        <BaseInput
          v-model="user.password"
          label="Password"
          name="password"
          type="password"
        />

        <div>
          <BaseButton title="Log in" full-width @button-click="login" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

const { authenticateUser } = useAuthStore();
const { authenticated } = storeToRefs(useAuthStore());

const user = ref({
  email: "admin@example.com",
  password: "Qwerty12345",
});

// TODO async
const login = () => {
  authenticateUser(user.value);

  if (authenticated) {
    navigateTo("/protected");
  }
};
</script>
