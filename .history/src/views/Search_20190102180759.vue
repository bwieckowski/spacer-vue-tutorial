<template>
    <div class="wrapper">
      <div class="search">
        <label for="search">Search</label>
        <input id="search" name="search">
      </div>
        <h1>Spacer</h1>
    </div>
</template>

<script>
export default {
  name: 'Search',
};
</script>

<style lang="scss" scoped>

  .wrapper{
    display:flex;
    flex-direction: column;
    aligin-items: center;
    margin: 0;
    padding: 30px;
    width: 100%;
  }

  .search{
    display:flex;
    flex-direction:column;
    width:250px;
  }
  
</style>
