<template>
  <div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      arrList: [1,2,3,4,5]
    };
  },
  watch: {
    arrList: {
      handler(val, oldval) {

      },
      deep: true
    }
  },
  methods: {
    changeArr() {
      // this.arrList[0] = 10;
      // 修改为：
      this.$set(this.arrList, 0, 10);
    }
  }
};
</script>
