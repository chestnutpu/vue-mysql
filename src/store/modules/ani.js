export default {
	state:{//状态，数据
		ani_A_leave:"animated fadeOut",
		ani_A_enter:"animated fadeIn",
		ani_B_leave:"animated bounceOutLeft",
		ani_B_enter:"animated bounceInRight",
		ani_leave:"animated fadeOut",
		ani_enter:"animated fadeIn"
	},
	getters:{//得到，函数
	},
	mutations:{//变更，函数
		ani_traisiton(state,payload){
			if(payload.class==1){
				state.ani_leave=state.ani_A_leave;
				state.ani_enter=state.ani_A_enter;
			}
			else if(payload.class==2){
				state.ani_leave=state.ani_B_leave;
				state.ani_enter=state.ani_B_enter;
			}
		}
	},
	actions:{//动作，函数
	}
};