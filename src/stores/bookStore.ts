import type { Book } from "@/types";
import { defineStore } from "pinia";

type StateShape = {
  list: Book[];
};

export const useBookStore = defineStore("Book", {
  state: (): StateShape => ({
    list: [
      {
        id: "QIO5zQEACAAJ",
        title: "Vue.js 3 Cookbook",
        author: ["Heitor Ramon Ribeiro"],
        publisher: "Packt Publishing Ltd",
        pushlished: "2020-09-18",
        imageLink:
          "http://books.google.com/books/content?id=wED-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        bookLink:
          "http://books.google.com.vn/books?id=QIO5zQEACAAJ&dq=vue3&hl=&source=gbs_api",
      },
      {
        id: "Qu2TzwEACAAJ",
        title: "Beginning Vue 3 Development",
        author: ["Greg Lim"],
        publisher: "Independently Published",
        pushlished: "2022-11-13",
        imageLink:
          "http://books.google.com/books/content?id=qAlGEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        bookLink:
          "http://books.google.com.vn/books?id=Qu2TzwEACAAJ&dq=vue3&hl=&source=gbs_api",
      },
      {
        id: "h2BOzwEACAAJ",
        title: "Actionable Vue 3",
        author: ["Nat Dunn", "Chris Minnick"],
        publisher: "Webucator",
        pushlished: "2022-08-12",
        imageLink:
          "http://books.google.com/books/content?id=h2BOzwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        bookLink:
          "http://books.google.com.vn/books?id=QIO5zQEACAAJ&dq=vue3&hl=&source=gbs_api",
      },
    ],
  }),
});
