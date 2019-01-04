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



const API = 'https://images-api.nasa.gov';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  components:{
    Claim,
    SearchInput,
  },
  methods:
  {

    handleInput:debounce ( function () {
      axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
        })
        .catch((error) => {
          console.log(error);
        });
    }, 400),
  },
};
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
