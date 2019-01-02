<template>
    <div class="wrapper">
      <div class="search">
        <p>test</p>
        <label for="search">Search</label>
        <input id="search" name="search">
      </div>
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
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

.search{
  display: flex;
  flex-direction: column;
  width: 250px;

  label{
    font
  }
  input{
    height:30px;
    border: 0px;
    border-bottom:1px solid black;
  }

}
</style>
