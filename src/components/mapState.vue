<template>
  <div>
    <div>mapState</div>
    {{countPlusLocalState}}
  <div>{{countAlias}}</div>
  <myoperator></myoperator>
  </div>
</template>
<script>
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from "vuex";
// 对象展开运算符
import myoperator from './operator';
export default {
  data() {
    return {
      localCount: 12,
    };
  },
  components:{
    myoperator,
  },
  computed: mapState({
    // 箭头函数可使代码更简练
    count: state => state.count,

    // 传字符串参数 'count' 等同于 `state => state.count`
    countAlias: 'count',

    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
};
</script>