<template>
  <div>

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
        phiti: this.item.links[0].href,
        
      };
    }
  }
</script>

<style lang="scss" scoped>

</style>
