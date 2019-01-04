<template>
  <div class="image-wrapper">
    <div class="fader"></div>
    <div class="image"></div>
  </div>
</template>

<script>
export default {
  name: 'heroImage',
};
</script>

<style lang="scss" scoped>
.image-wrapper{

  position:fixed;
  height: 100vh;
  top:0;
  z-index: -1;
  width: 100%;



}
.fader{
  height: 100vh;
  width:100%;
  background-color:rgb(0,0,0,);
  opacity: 0.4;
}
.image{
  height: 100vh;
  width:100%;
  background-image:url('../assets/background.jpg');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:80% 0;
}
</style>
