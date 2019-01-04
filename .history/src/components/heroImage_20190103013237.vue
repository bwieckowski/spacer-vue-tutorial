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
  display:flex;
  flex-direction: column;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  justify-content:center;
  margin: 0;
  padding: 30px;
  height: 100vh;
  width: 100%;
  position:fixed

}
.image{
  background-image:url('../assets/background.jpg');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:80% 0;
}
</style>
