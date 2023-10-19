import { defineStore } from "pinia";

interface UserPayloadInterface {
  email: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
  }),
  actions: {
    // TODO: handle wrong credentials
    authenticateUser({ email, password }: UserPayloadInterface) {
      // fake user api fetch
      // const { data }: any = await useFetch(...)

      if (email === "admin@example.com" && password === "Qwerty12345") {
        const token = useCookie("token");
        token.value = "some-fake-token";
        this.authenticated = true;
      }
    },
    logUserOut() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
