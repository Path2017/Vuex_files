<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <div>
      vuex 测试区域
    </div>
    <div>
      {{$store.state.count}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{

    }
  },
  mounted(){
    console.log(this.$store.state.count)
  },
  methods:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
