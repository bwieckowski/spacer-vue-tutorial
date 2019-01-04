<template>
  <div class="image-wrappe">
    <div class="fader">
    <div class="image"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'heroImage',
};
</script>

<style lang="scss" scoped>
.image{
  background-image:url('../assets/background.jpg');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:80% 0;
}
</style>
