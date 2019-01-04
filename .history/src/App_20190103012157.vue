<template>
  <div id="app">
    <div class="wrapper">
      <Claim />
      <SearchInput />
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue'
import SearchInput from '@/components/SearchInput.vue'
</script>

<style lang="scss" >
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,800');

*{
  box-sizing:border-box;
}
body{
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  padding: 0;
}

</style>
