<template>
  <div class="search-wrapper">
    <input
      id="search"
      name="search"
      v-model="searchValue"
      @input="handleInput">
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'SearchInput',
  }
</script>

<style lang="scss" scoped>
input{
  height:30px;
  border: 0px;
  border-bottom:1px solid black;
  
}

.search-wrapper{
  display: flex;
  flex-direction: column;
  width: 250px;
}
</style>