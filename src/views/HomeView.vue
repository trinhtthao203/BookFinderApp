<script setup lang="ts">
import { ref } from "vue";
import BookCard from "../components/BookCard.vue";
import { api } from "../api/google_book_api";
import type { BookList, VolumeInfo } from "../types";

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
</script>

<template>  
  <form @submit.prevent="searchBooks">
    <input type="text" v-model="searchText" required/>
    <button @click="searchBooks" @keyup.enter="searchBooks">Search</button>
    <div v-if="bookList">
      <div v-for="item in bookList" :key="item.id">    
          <BookCard :book="item"/>   
      </div>
    </div>
  </form>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>

