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
    position:fixed;
    color:black;
    background-color: white;
    top: 0;
    left: 0;
    width: 100%;
    height:100%;
  }

  .close{
    position: absolute;
    right:20px;
    top:20px;

    &::before,
    &::after
    {
      content: '';
      position: absolute;
         

    }
  }
.innerWrapper{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding:50px;
  flex-direction: column;

  .photo{
    height: auto;
    max-width:90%;
    background:black;

    img{
      width:100%;
    }
    .description{
      color:#333;
    }
  }
}
</style>