<template>
  <div id="app">
    <div :class="[{ flexStart: step === 1 },'wrapper']">

      <transition name="slide">
        <img class="logo" src="./assets/logo.svg" alt="logo" v-if="step === 1">
      </transition>

      <Claim v-if="step === 0" />
      <SearchInput  v-model="searchValue" @input="handleInput" :dark="step === 1"/>

      <transition name="fade">
            <heroImage v-if="step === 0 " />
      </transition>

      <div class="results"  v-if="results && !loading && step === 1">
          <Item v-for="item in results" :key="item.data[0].nasa_id" :item="item" />
      </div>
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
import Item from '@/components/Item.vue'

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
    Item,
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
  position: relative;


}

.logo{
  position:absolute;
  width: 10vh;
  top: 30px;
}

.flexStart{
  justify-content:flex-start;
  height: 100vh;

}

.fade-enter-active, .fade-leave-active
{
  transition: opacity 0.4s ease-in;
}

.fade-enter, .fade-leave-to
{
  opacity: 0;
}


.slide-enter-active, .slide-leave-active
{
  transition: margin-top 0.7s ease-in-out;
}
.dark{
  margin-top: 40px;
  color: black;
}
.slide-enter, .slide-leave-to
{
  margin-top: -60px;
}

body{
  font-family: 'Montserrat', sans-serif;
  margin: 0;
  color: white;
  padding: 0;
}

.results{
  display:grid;
  grid-template-columns:1fr 1fr ;
  grid-gap: 20px;
  margin-top:40px;

  @media (min-width: 768px) {

    grid-template-columns:1fr 1fr 1fr ;
  }
}



</style>
