<script setup lang="ts">
</script>

<template>
  <aside class="sidebar">
    <div class="shimmer element"></div>
    <div class="shimmer element"></div>
    <div class="shimmer element"></div>
  </aside>
</template>

<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 80px;
  gap: 16px;
  width: 80px;
  padding: 32px 8px;
  background-color: #f5f5f5;
}

.element {
  background-color: #dadada;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
</style>
