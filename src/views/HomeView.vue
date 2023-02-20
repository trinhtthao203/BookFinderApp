<script setup lang="ts">
import {
  NGrid,
  NGridItem,
  NInput,
  NImage,
  NButton,
  NInputGroup,
  NSpace,
} from "naive-ui";
import { ref, onMounted } from "vue";
import BookCard from "@/components/BookCard.vue";
import Loading from "@/components/Loading.vue";
import { api } from "@/api/google_book_api";
import type { BookList, VolumeInfo } from "@/types";

const searchName = ref("");
const isLoading = ref(false);
const errorInput = ref(false);
const notFound = ref(false);

const BookList = ref<BookList[]>();
const elSearchName = ref<HTMLInputElement | null>(null);

const onChangeText = (event: InputEvent) => {
  searchName.value = (event.target as HTMLInputElement).value;
};

const searchBooks = () => {
  BookList.value = [];
  notFound.value = false;
  if (!searchName.value) {
    errorInput.value = true;
  } else {
    errorInput.value = false;
    isLoading.value = true;
    setTimeout(() => {
      if (searchName.value) {
        api
          .get(searchName.value)
          .then((res) => {
            BookList.value = res.data.items;
            isLoading.value = false;
            if (!BookList.value) notFound.value = true;
            else notFound.value = false;
          })
          .catch((err) => {
            console.log(err);
          });
        errorInput.value = false;
      }
    }, 2000);
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
          <n-input-group style="display: flex; justify-content: center">
            <n-input
              type="text"
              class="input"
              v-model:value="searchName"
              placeholder="Type author, bookname,.."
              :style="{ width: '100%' }"
              @keyup.enter="searchBooks"
              ref="elSearchName"
              :status="errorInput ? `error` : `success`"
              clearable
            />
            <n-button type="info" @click="searchBooks"> Search </n-button>
          </n-input-group>
          <div>
            <p
              style="color: #d63031; font-size: 14px; font-weight: 600"
              v-show="errorInput"
            >
              Please fill search input !!!
            </p>
          </div>
        </div>
      </div>
    </n-grid-item>
    <n-grid-item>
      <n-grid
        cols="1 s:1 m:2 l:2 xl:2 2xl:2"
        responsive="screen"
        v-if="BookList"
      >
        <n-grid-item
          v-if="isLoading"
          v-for="num in 6"
          style="display: flex; justify-content: center; margin-bottom: 20px"
        >
          <Loading />
        </n-grid-item>
        <n-grid-item
          v-else="isLoading"
          v-if="BookList"
          v-for="book in BookList"
          :key="book.id"
          style="display: flex; justify-content: center; margin-bottom: 20px"
        >
          <BookCard :book="book" />
        </n-grid-item>
      </n-grid>
      <n-grid
        v-if="notFound"
        cols="1 s:1 m:1 l:1 xl:1 2xl:1"
        responsive="screen"
      >
        <n-grid-item
          style="
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: white;
          "
        >
          <img
            style="width: 200px"
            src="../../public/images/73061-search-not-found.gif"
            alt="Loading"
          />
          <p id="text-not-found">Nothing to show !!!</p>
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
  height: 300px;
  background-size: cover;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
}
#input-grp {
  position: absolute;
  top: 240px;
}

#loading-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

#text-not-found {
  font-size: 20px;
  color: #3161f1;
  font-weight: 400;
}
</style>
