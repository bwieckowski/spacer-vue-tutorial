<template>
  <div class="claim-wrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    <p class="subclaim"> iste rem magni deleniti Vitae tenetur iusto!</p>
  </div>
</template>

<script>
/* eslint-disable */
  export default {
    name: 'Claim',
}
</script>

<style lang="scss" scoped>
.claim-wrapper{
  display:flex;
  flex-direction:column;
  text-align: center;
  justify-content:center;
  align-items: center;

}

.claim{
  margin-bottom: 60px;
  font-size: 50px;
  margin:0;
}
.subclaim{
font-size:13px;
margin: 25px 0 0 0;
}
</style>