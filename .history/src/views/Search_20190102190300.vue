<template>
    <div class="wrapper">
      <div class="search">
        <label for="search">Search</label>
        <input
          id="search"
          name="search"
          v-model="searchValue"
          @input="handleInput"
          >
      </div>
    </div>
</template>

<script>
import axios from 'axios';
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
    };
  },
  methods:
  {
    handleInput(): debounce(() =>{
        axios.get(`${API}/search?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
  },
};
</script>

<style lang="scss" scoped>
.wrapper{
  display:flex;
  flex-direction: column;
  -webkit-align-items: center; /* Safari 7.0+ */
  align-items: center;
  margin: 0;
  padding: 30px;
  width: 100%;
}

.search{
  display: flex;
  flex-direction: column;
  width: 250px;

  label{
    font-family: Montesrrot, sans-serif;
  }
  input{
    height:30px;
    border: 0px;
    border-bottom:1px solid black;
  }

}
</style>
