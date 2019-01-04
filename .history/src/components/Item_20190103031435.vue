<template>
  <div :style="style" class="item">
  </div>
</template>

<script>
  export default {
    name: 'Item',
    props:{
      item:{
        type: Object,
        required: true,
     },
    },
    data(){
      return{
        photo: this.item.links[0].href,
        title: this.item.links[0].title,
        style:{
          backgroundImage: `url("${this.photo}")`,
        }
      };
    },
    computed: {
      style(){
        return 
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item{
    height: 300px;
    width: 300px;
    background-size: cover;
    background-position:50%;
    background-repeat: no-repeat;
  }
</style>
