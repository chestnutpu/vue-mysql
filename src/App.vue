<template>
  <div id="app":style="{marginLeft:appMove+'px'}">
   
    <transition :enter-active-class="ani_enter" :leave-active-class="ani_leave"> 
    <router-view class="main"></router-view>
    
    </transition> 
    

    </section>
    
  </div>
</template>

<script>
import Bus from "@/assets/js/bus.js";
import headercpm from "@/components/common/headercpm";
import footercpm from "@/components/common/footercpm";

import flexible from "./assets/js/flexible.js";
flexible();

export default {
  name: 'app',
  data(){
    return{
      appMove:0
    }
  },
  components:{
    headercpm,
    footercpm
  },
  mounted(){
    let _this=this;
    Bus.$on("move",function(data){
      if(_this.appMove==0){
        _this.appMove=data;
      }
      else{_this.appMove=0;}
   
   });

  },
  beforeUpdate(){
    let path=this.$route.path;
    var arr=path.match(/\//g);
    this.$store.commit("ani_traisiton",{
      class:arr.length
    });
      },
  computed:{//计算属性,函数
    ani_leave(){
       return this.$store.state.ani.ani_leave;
    },
    ani_enter(){
       return this.$store.state.ani.ani_enter;
    },
  },

}
</script>

<style lang="scss">
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/px2rem.scss";
@import "./assets/css/animate.css";

html{background:#f1f1f1;}
html,body{height: 100%;}
.animated{position:fixed;  z-index:999;}
#app {
  transition:transform 0.1s;
}
#app {
  background:#f1f2f2;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position:relative;
  box-sizing:border-box;
  
  min-height: 100%;
  width:rem(750px);
  transition:margin-left 0.2s;

  
}

.main{width:rem(750px);}
.headercpm{position: absolute; left: 0; top: 0; width:100%;}
.footercpm{position: absolute; left: 0; bottom: 0; width:100%;}

</style>
