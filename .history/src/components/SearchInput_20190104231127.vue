<template>
    <input
      id="search"
      name="search"
      :value="value"
      :class="{ dark }"
      @input="handleChange"
      />
</template>

<script>
/* eslint-disable */
  export default {
    name: 'SearchInput',
    props:{
      value:{
        type: String,
        required: true,
      },
      dark:{
        type: Boolean,
        default: false,
      },
    },
    methods:
    {
      handleChange(e){
        this.$emit('input', e.target.value);
      },
    },
  };
</script>

<style lang="scss" scoped>
input{
  height:30px;
  width:20vw;
  color:white;
  text-align:center;
  font-size:18px;
  font-weight: 300;
  border: 0px;
  margin-top: 40px;
  border-bottom: 2px solid white;
  background: none;
  transition: box-shadow 0.5s;
}

input:focus{
  outline: none;
  box-shadow: 0 10px 20px -8px rgba(255, 255, 255, 0.3);
}

.dark{
  color: #1e3d4a;
  border-bottom-color: #1e3d4a
}

.dark:focus{
  outline: none;
  box-shadow: 0 10px 20px -8px #1e3d4ab6;
}


</style>