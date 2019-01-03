<template>
  <div class="search-wrapper">
    <label for="search">Search</label>
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput" >
  </div>
</template>

<script>
  export default {
    name: "SearchInput",
  }
</script>

<style lang="sccs" scoped>

.search-wrapper{
  display: flex;
  flex-direction: column;
  width: 250px;
}

input{
  height:30px;
  border: 0px;
  border-bottom:1px solid black;
}
</style>