import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to) => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if (token.value) {
    authenticated.value = true;
  }

  if (!token.value && to?.name === "protected") {
    abortNavigation();
    return navigateTo("/");
  }
});
