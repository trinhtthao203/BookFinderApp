import type { BookList } from "@/types";
import { defineStore } from "pinia";
import { api } from "@/api/google_book_api";
type StateShape = {
  list: BookList[];
};

export const useBookStore = defineStore("BookList", {
  state: (): StateShape => ({
    list: [],
  }),
  actions: {
    // getBookList(searchText: string) {
    //   const value = api.get(searchText)
    //   return
    // }
  }
});
