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
