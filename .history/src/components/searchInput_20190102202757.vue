<template>
  <div class="search">
    <label for="search">Search</label>
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput"
      >

  <ul>
    <li v-for="item in results" :key="item.data[0].nasa_id">
      <p>{{ item.data[0].description }}</p>
    </li>
  </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>

</style>