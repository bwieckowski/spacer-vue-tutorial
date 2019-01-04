<template>
  <div class="image-wrappe">
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
  height: 100%;
  width: 100%;

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
