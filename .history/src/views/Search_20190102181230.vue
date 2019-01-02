<template>
    <div class="wrapper">
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

  input{
    height:30px;
    border:0px;
    border-bottom:1px solid;
  }

}
</style>
