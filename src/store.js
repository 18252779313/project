import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		imgInfo:{},
		goods:{},
	},
	mutations:{
		setImgInfo(state,info){
			state.imgInfo = info;
		},
		setGoods(state,info){
			state.goods = info;
		}
	},
	actions:{
		setImgInfo({commit},info){
			commit('setImgInfo',info)
		},
		setGoods({commit},info){
			commit('setGoods',info)
		}
	},
	getters:{
		getImgInfo(state){
			return state.imgInfo;
		},
		getGoods(state){
			return state.goods;
		}
	}
})

export default store