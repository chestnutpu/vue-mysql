export default {
	state:{//状态，数据
		dataJson:[]
	},
	getters:{//得到，函数
	},
	mutations:{//变更，函数
		refreshMore_updateData(state,payload){
			state.dataJson=payload.data;
		},
		refreshMore_moreData(state,payload){
			state.dataJson=state.dataJson.concat(payload.data);
		}
	},
	actions:{//动作，函数
	}
};