import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    // 项目百科页  是否为项目方 false: 不是项目方
    projectParty: false,
    // 项目百科页  项目方是否填写 true: 是
    projectSelfValue: false,
    userId: '',

    pjtnews: 0,
    count: 1
}

const mutations = {
    add(state) {
        state.count += 1;
    },
    reduce(state) {
        state.count -= 1;
    }
}
export default new Vuex.Store({
    state,
    mutations
});