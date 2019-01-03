<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">spacer</router-link>
      <router-link to="/about">about</router-link>
    </div>
  <router-view/>
  </div>
</template>
<style lang="scss" scoped></style>
<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet">
*{
  box-sizing:border-box;
}
body{
  font-family: 'Montserrat', sans-serif;
}
</style>
