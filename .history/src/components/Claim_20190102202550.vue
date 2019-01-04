<template>
  <div class="claim-wrapper">
    <h1 class="claim">SPACER</h1>
    <p class="subclaim">Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
    <p class="subclaim">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi accusamus doloremque iste rem magni deleniti commodi? Vitae tenetur iusto!</p>
  </div>
</template>

<script>
  export default {
    name: 'Claim',
  }
</script>

<style lang="scss" scoped>
.claim-wrapper{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items: center;

}

.claim{
  font-size: 50px;
}
.subclaim{
font-size:13px;
}
</style>