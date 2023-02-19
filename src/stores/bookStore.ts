import type { BookList } from "@/types";
import { defineStore } from "pinia";
type StateShape = {
  list: BookList[];
};

export const useBookStore = defineStore("BookList", {
  state: (): StateShape => ({
    list: [],
  }),
  actions: {
  }
});
