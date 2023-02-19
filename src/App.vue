<!-- <script setup lang="ts">

import { ref } from "vue";
import BookCard from "./components/BookCard.vue";
import { api } from "./api/google_book_api";
import type { BookList, VolumeInfo } from "./types";

const searchText = ref("");
const bookList = ref<BookList[]>();

const searchBooks = () => {
  if(searchText.value !== "") {
  api
    .get(searchText.value)
    .then((res) => {
      bookList.value = res.data.items;
    })
    .catch((err) => {
      console.log(err);
    });
  }
};
</script> -->

<!-- <template>
  
  <form @submit.prevent="searchBooks">
    <input type="text" v-model="searchText" required/>
    <button @click="searchBooks" @keyup.enter="searchBooks">Search</button>
    <div v-if="bookList">
      <div v-for="item in bookList" :key="item.id">    
          <BookCard :book="item"/>
   
      </div>
    </div>
  </form>
</template> -->
<script setup lang="ts">
import HomeView from "@/views/HomeView.vue";
</script>

<template>
  <HomeView />
</template>
