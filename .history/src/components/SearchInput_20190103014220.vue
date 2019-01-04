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
  border-bottom:1px solid white;
  background: none;
}

.search-wrapper{
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  width: 250px;
}

input:focus{
  outline: none;
  box-shadow: 0 5px 10px -10px -8px 
}
</style>