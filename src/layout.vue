<template>
  <div id="app">
    <router-view/>
    <img src="./assets/logo.png">
    <div>
      vuex 测试区域
    </div>
    <div id="jq"></div>
    <div>
      {{$store.state.count}}
    </div>
    <div @click="countUp">+</div>
    <div @click="countDown">-</div>
    <myvuex></myvuex>
    <mymapState></mymapState>
  </div>
</template>

<script>
import myvuex from './components/vuex';
import mymapState from './components/mapState';
export default {
  name: 'App',
  data(){
    return{

    }
  },
  components:{
    myvuex,
    mymapState,
  },
  mounted(){
    console.log(this.$store.state.count)
    console.log(this.reqpath)
    $('#jq').html('测试jquery')
  },
  methods:{
    // 增加count 
    countUp(){
      this.$store.commit('add');
    },
    // 减少count
    countDown(){
      this.$store.commit('reduce');
    }
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
