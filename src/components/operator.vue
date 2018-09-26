<template>
  <div>
    <div>对象展开运符</div>
    {{nowdata}}
    <div>
      {{count}}
    </div>
  </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";
export default {
  data() {
    return {
      data: 123
    };
  },
  computed: {
    nowdata() {
      return this.data + 1;
    },
    ...mapState({
      // 箭头函数可使代码更简练
      count: state => state.count
    })
  }
};
</script>
