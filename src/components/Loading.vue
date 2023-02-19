<script setup lang="ts">
import type { BookList } from "../types";
import { NCard, NSkeleton } from "naive-ui";
</script>

<template>
  <n-card hoverable>
    <n-skeleton height="100px" width="90%" :sharp="false" />
  </n-card>
</template>

<style scoped>
.n-a {
  /* width: 20%; */
}
.n-card {
  margin-top: 20px;
  height: 100%;
  width: 80%;
  border-radius: 10px;
  box-shadow: 7px 7px 5px 7px rgba(189, 195, 199, 0.5);
}
.content-card {
  width: 100%;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* number of lines to show */
  line-clamp: 2;
  color: #34495e;
}

.img-card {
  border: 1px solid #bdc3c7;
  box-shadow: 5px 10px #888888;
}

#title-card {
  width: 100%;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #c0392b;
  padding-bottom: 10px;
}

#container-content {
  padding-left: 30px;
  width: 70%;
}
</style>
