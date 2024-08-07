<script setup lang="ts">
import Header from "./presentations/Header.vue";
import Sidebar from "./presentations/Sidebar.vue";
import Stage from "./components/Stage.vue";
</script>

<template>
  <Header />
  <main class="main">
    <Sidebar />
    <Stage />
  </main>
</template>

<style scoped>
.main {
  display: flex;
  background-color: #dcdcdc;
}
</style>
