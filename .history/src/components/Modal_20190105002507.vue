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
      <div class="close" @click="$emit('closeModal')" />
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

    @media (min-width: 1024px) {
      max-width: 70%;
      height: 60%;
      left:0%;
      right:0;
      top:0;
      bottom:0;
      margin: auto;
      box-shadow:0 30px  30px -10px rgba(0,0,0,0.3)
    }
  }

  .innerWrapper{
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding:50px;
  flex-direction: column;


   @media (min-width: 1024px) {
      flex-direction: row;
    }

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

  .close{
    position: absolute;
    right:40px;
    top:40px;
    cursor: pointer;

    &::before,
    &::after{
      content: '';
      position: absolute;
      width:20px;
      height: 2px;
      background-color:black;
      display: block;
    }

    &::before{
      transform: rotate(45deg);
    }

    &::after{
      transform: rotate(-45deg);
    }
  }

}
</style>