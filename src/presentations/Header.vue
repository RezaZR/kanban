<script setup lang="ts">
</script>

<template>
  <header class="header">
    <div class="shimmer element logo"></div>
    <div class="detail">
      <div class="shimmer element"></div>
      <div class="shimmer element"></div>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  background-color: #f5f5f5;
}

.element {
  background-color: #dadada;
}

.logo {
  width: 200px;
  height: 30px; 
}

.detail {
  display: flex;
  align-items: center;
  gap: 16px;
}

.detail div:nth-of-type(1) {
  width: 150px;
  height: 20px; 
}

.detail div:nth-of-type(2) {
  width: 40px;
  height: 40px; 
  border-radius: 50%;
}
</style>
