
//<script lang="ts" setup>
//import type { BookList } from "../types";
//
//type PropTypes = {
//  book: BookList;
//};
//
//defineProps<PropTypes>();
//</script>
//
//<template>
//  <div>
//    <h4> <b>{{ book.volumeInfo.title }}</b> </h4>
//    <div>
//    <div v-if="book.volumeInfo.imageLinks?.smallThumbnail">
//        <img :src="book.volumeInfo.imageLinks?.smallThumbnail"  alt="img_book"/>
//
//    </div>
//    <div v-else>
//        <img width="100" height="100" src= "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png"  alt="img_book"/>
//    </div>
//    </div>
//    
//
//    <p><b>Author: </b> <ul v-for="author in book.volumeInfo.authors" :key="author"><li>{{ author }}</li></ul></p>
//    <p><b>Publisher: </b> {{ book.volumeInfo.publisher }}</p>
//    <p><b>Published: </b> {{ book.volumeInfo.publishedDate }}</p>
//  
//
//    </div>
//</template>
//
//<style scoped>
//.n-card {
//  max-width: 50px;
//}
//</style>

<script setup lang="ts">
import { NCard, NA } from "naive-ui";
defineProps<{
  title?: string;
  author?: string[];
  publisher?: string;
  pushlished?: string;
  bookLink?: string;
  imageLink?: string;
}>();
</script>

<template>
  <n-a :href="bookLink" id="container">
    <n-card :title="title" hoverable>
      <div style="display: flex; flex-direction: row; align-items: center">
        <img style="width: 120px" :src="imageLink" />
        <div style="width: 70%">
          <p>
            <span style="font-weight: bold">Author:</span>
            {{ author?.join(", ") }}
          </p>
          <p>
            <span style="font-weight: bold">Publisher: </span>{{ publisher }}
          </p>
          <p>
            <span style="font-weight: bold">Pushlished: </span>{{ pushlished }}
          </p>
        </div>
      </div>
    </n-card>
  </n-a>
</template>

<style scoped>
#container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 450px;
  height: 230px;
}
/* .text-card {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
} */
</style>

