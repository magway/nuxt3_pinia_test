import { User } from "~/types/user";

const API_URL = "https://randomuser.me/api";
const API_SEED = "api-seed";
const USERS_PER_PAGE = 5;

export interface UsersState {
  users: Array<User>;
  currentPage: number;
  loading: Boolean;
}

export const useUsersStore = defineStore({
  id: "users",
  state: (): UsersState => ({
    users: [],
    currentPage: 1,
    loading: false,
  }),
  actions: {
    // TODO: refactor
    async fetchUsers(): Promise<void> {
      this.loading = true;

      const { data } = await useFetch(API_URL, {
        key: `usersListPage-${this.currentPage}`,
        query: {
          page: this.currentPage,
          results: USERS_PER_PAGE,
          seed: API_SEED,
          inc: ["picture", "name", "dob", "email", "location"].join(","),
        },
        transform: (response: any) => {
          return response.results.map((user: any) => {
            return {
              avatarUrl: user.picture.thumbnail,
              fullName: [user.name.first, user.name.last].join(" "),
              dateOfBirth: "",
              email: user.email,
              location: [
                user.location.country,
                user.location.state,
                user.location.city,
              ].join(", "),
            };
          });
        },
      });
      this.loading = false;

      if (!data.value) {
        return;
      }

      this.users =
        this.currentPage === 1 ? data.value : [...this.users, ...data.value];
    },
  },
});
