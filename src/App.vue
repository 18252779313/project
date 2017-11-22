<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*{
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
    font-family: "MicrosoftYaHei",
}
h2{
    text-align: center;
}
a{
  text-decoration: none;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix{
  overflow: hidden;
}
.mint-header{
  background: rgb(24,23,28);
}
.mint-header-title{
  font-size: 20px;
}
.back{
    width: 15px;
}
</style>
