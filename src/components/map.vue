<template>
  <div>
     add map vue
  </div>
</template>
<script>
  export default {
    data(){
      return {
        objVal: {
          name: 'obj',
          type: 'obj'
        }
      }
    },
    watch:{
      objVal:{
        handler(val,oldval){

        },
        deep: true,
      }
    },
    methods:{
      changeObj(){
        this.objVal.name = 'newobj';
      }
    }
  }
</script>
<style>

</style>

