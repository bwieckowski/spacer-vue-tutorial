<template>
  <div :style="style">

    <img :src="photo" :alt="title">
  </div>
</template>

<script>
  export default {
    name: 'Item',
    item:{
      type: Object,
      required: true,
    },
    data(){
      return{
        photo: this.item.links[0].href,
        title: this.item.links[0].title,
        style:{
          backgroundImage: `photo,
        }
      };
    },
  }
</script>

<style lang="scss" scoped>

</style>
