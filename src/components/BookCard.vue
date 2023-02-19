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
