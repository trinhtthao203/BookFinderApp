<script setup lang="ts">
import type { BookList } from "../types";
import { NCard, NA } from "naive-ui";

type PropTypes = {
  book: BookList;
};
defineProps<PropTypes>();
</script>

<template>
  <n-card hoverable>
    <h3 id="title-card">{{ book.volumeInfo?.title }}</h3>
    <template style="display: flex; flex-direction: row">
      <n-a :href="book.volumeInfo?.infoLink">
        <img id="img-card" :src="book.volumeInfo?.imageLinks?.thumbnail" />
      </n-a>
      <div id="container-content">
        <p class="content-card">
          <span style="font-weight: bold">Author:</span>
          {{ book.volumeInfo?.authors?.join(", ") }}
        </p>
        <p class="content-card">
          <span style="font-weight: bold">Publisher: </span
          >{{ book.volumeInfo?.publisher }}
        </p>
        <p class="content-card">
          <span style="font-weight: bold">Pushlished: </span
          >{{ book.volumeInfo?.publishedDate }}
        </p>
      </div>
    </template>
  </n-card>
</template>

<style scoped>
.n-a {
  width: 30%;
}
.n-card {
  height: 100%;
  width: 80%;
  border-radius: 10px;
  box-shadow: 7px 7px 5px 7px rgba(189, 195, 199, 0.5);
}
.content-card {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  color: #34495e;
}

#img-card {
  width: 80%;
  height: auto;
  border: 1px solid #bdc3c7;
  box-shadow: 5px 10px #888888;
}

#title-card {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; /* number of lines to show */
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: 600;
  color: #c0392b;
  padding-bottom: 10px;
}

#container-content {
  padding-left: 30px;
}
</style>
