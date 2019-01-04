<template>
  <div class="search-wrapper">
    <label for="search">Search</label>
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
      >
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>