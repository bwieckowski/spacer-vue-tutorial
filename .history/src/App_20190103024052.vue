<template>
  <div id="app">
    <div :class="[{ flexStart: step === 1 },'wrapper']">

      <transition>
        
      </transition>

      <Claim v-if="step === 0" />
      <SearchInput  v-model="searchValue" @input="handleInput" :dark="step === 1"/>

      <transition name="fade">
            <heroImage v-if="step === 0 " />
      </transition>

    </div>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios';
import debounce from 'lodash.debounce';
import Claim from '@/components/Claim.vue'
import heroImage from '@/components/heroImage.vue'
import SearchInput from '@/components/SearchInput.vue'

const API = 'https://images-api.nasa.gov';

export default {
  name: 'Search',
  data() {
    return {
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  components:{
    Claim,
    SearchInput,
    heroImage
  },
  methods:
  {
    handleInput:debounce ( function () {
      console.log( this.searchValue )
      this.loading = true;
      axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          this.loading = false;
          this.step = 1;
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

}

.flexStart{
  justify-content:flex-start;
}

.fade-enter-active, .fade-leave-active
{
  transition: all 1 ease;
}

.fade-enter, .fade-leave-to
{
  opacity: 0;
}

body{
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  color: white;
  padding: 0;
}

</style>
