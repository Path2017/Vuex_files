<template>
    <div>
        <div>状态管理工具</div>
        <div>{{count}}</div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.vuexnum;
    }
  },
};
</script>
<style scoped>
</style>

