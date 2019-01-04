<template>
  <div class="ModalWrapper">
    <div class="innerWrapper">
      <div class="photo"></div>
      <div class="description">
        <h2 class="title"> Lorem Ipsum</h2>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div class="close"></div>
    </div>
  </div>
</template>

<script>
export default {
/* eslint-disable */
  name: 'Modal',
};
</script>
<style lang="scss" scoped>
  .ModalWrapper{
back
    position:fixed;
    color:black;
    top: 0;
    left: 0;
    max-width: 100%;
  }
.innerWrapper{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding:50px;
}
</style>