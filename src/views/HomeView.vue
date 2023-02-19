<script setup lang="ts">
import {
  NGrid,
  NGridItem,
  NInput,
  NImage,
  NButton,
  NInputGroup,
} from "naive-ui";
import { ref, onMounted } from "vue";
import BookCard from "@/components/BookCard.vue";
import { api } from "@/api/google_book_api";
import type { BookList, VolumeInfo } from "@/types";

const searchName = ref("");
const isLoading = ref(false);

const BookList = ref<BookList[]>();
const elSearchName = ref<HTMLInputElement | null>(null);

const onChangeText = (event: InputEvent) => {
  searchName.value = (event.target as HTMLInputElement).value;
};

const searchBooks = () => {
  if (searchName.value !== "") {
    api
      .get(searchName.value)
      .then((res) => {
        BookList.value = res.data.items;
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

onMounted(() => {
  elSearchName.value?.focus();
});
</script>

<template>
  <n-grid cols="1" responsive="screen">
    <n-grid-item>
      <div id="show_bg_2">
        <n-image width="250" src="../../public/images/logo.png" />
        <div id="input-grp">
          <n-input-group
            style="display: flex; justify-content: center; padding-bottom: 20px"
          >
            <n-input
              type="text"
              class="input"
              v-model:value="searchName"
              :style="{ width: '100%' }"
              :keyup="onChangeText"
              ref="elSearchName"
              aria-required="true"
            />
            <n-button
              type="info"
              @click="searchBooks"
              @keyup.enter="searchBooks"
            >
              Search
            </n-button>
          </n-input-group>
        </div>
      </div>
    </n-grid-item>
    <n-grid-item> </n-grid-item>
    <n-grid-item>
      <n-grid cols="1 s:1 m:2 l:2 xl:2 2xl:2" responsive="screen">
        <n-grid-item
          v-for="book in BookList"
          :key="book.id"
          style="display: flex; justify-content: center"
        >
          <BookCard :book="book" />
        </n-grid-item>
      </n-grid>
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
#show_bg_2 {
  position: relative;
  background-attachment: fixed;
  background-image: linear-gradient(
      to bottom,
      rgba(53, 59, 72, 0.8),
      rgba(245, 246, 252, 0.52)
    ),
    url("../../public/images/pexels-davyd-bortnik-3132530.jpg");
  background-position: center;
  width: 100%;
  height: 340px;
  background-size: cover;
  color: white;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
#input-grp {
  position: absolute;
  top: 280px;
}
</style>
