
<template>
    <div class="wrapper">
    <Claim />
    <SearchInput />
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

<style lang="scss" scoped>
.wrapper{
  display:flex;
  flex-direction: column;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  justify-content:center;
  margin: 0;
  padding: 30px;
  height: 100vh;
  width: 100%;
  background-image:url('../assets/background.jpg');
  background-repeat:no-repeat;
  background-size:cover;
  background-position:80% 0;
}
</style>
