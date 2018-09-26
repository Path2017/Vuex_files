import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
        vuexnum: 10,
    },
    mutations: {
        add(state) {
            state.count += 1;
        },
        reduce(state) {
            state.count -= 1;
        }
    }
})

export default store;