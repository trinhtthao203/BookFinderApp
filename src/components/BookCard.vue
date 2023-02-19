<script setup lang="ts">
import type { BookList } from "../types";
import { NCard, NA } from "naive-ui";
type PropTypes = {
  book: BookList;
};
defineProps<PropTypes>();
</script>

<template>
  <n-a :href="book.volumeInfo?.infoLink" id="container">
    <n-card :title="book.volumeInfo?.title" hoverable>
      <div style="display: flex; flex-direction: row; align-items: center">
        <div v-if="book.volumeInfo?.imageLinks?.smallThumbnail">
        <img
          style="width: 120px"
          :src="book.volumeInfo?.imageLinks?.thumbnail"
        />
      </div>
      <div v-else>
        <img
          style="width: 120px"
          src= "https:upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png"
        />
      </div>
        <div style="width: 70%">
          <p>
            <span style="font-weight: bold">Author:</span>
            {{ book.volumeInfo?.authors?.join(", ") }}
          </p>
          <p>
            <span style="font-weight: bold">Publisher: </span
            >{{ book.volumeInfo?.publisher }}
          </p>
          <p>
            <span style="font-weight: bold">Pushlished: </span
            >{{ book.volumeInfo?.publishedDate }}
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
  margin-bottom: 10px;
  width: 450px;
  height: 270px;
}
/* .text-card {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
} */
</style>
