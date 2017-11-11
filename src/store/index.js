import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);//使用插件VUEX
import ani from "./modules/ani";
import refreshMore from "./modules/refreshMore";

export default new Vuex.Store({
	state:{//状态，写数据

	},
	getters:{//得到，函数

	},
	mutations:{//变更，函数，同步操作

	},
	actions:{//动作，函数，异步操作

	},
	modules:{//模块
		ani,
		refreshMore,
		app:{//自定义模块名称
			state:{//状态，写数据
				count:0

			},
			getters:{//得到，函数

			},
			mutations:{//变更，函数
				add(state,payload){
					state.count++;
				},
				reduce(state,payload){
					state.count--;
				}


			},
			actions:{//动作，函数
				add(context,payload){
					
					context.commit("add",payload)
				},
				reduce(context,payload){
					
					context.commit("reduce",payload)
				}

			},
			modules:{//子模块
				}

		}

	}
});