<template>
	<section class="footercpm">
	<router-link v-for="(item,key) in footdata" :to="item.url" :key="key"><p><i :class="item.img"></i>{{item.name}}</p></router-link>
	</section>
</template>
<script>
	export default{
		name:"footercpm",
		data(){
			return{
				footdata:[
				{name:"首页",
				 url:"/",
				 img:"fa fa-home"
				},
				{name:"电话咨询",
				 url:"/tell",
				 img:"fa fa-phone"
				},
				{name:"在线咨询",
				 url:"/inline",
				 img:"fa fa-commenting"
				}

				]
			}
		}
	}
</script>
<style lang="scss" scoped>
@import "../../assets/css/px2rem.scss";
@import "../../assets/css/font-awesome.min.css";
	
.footercpm{z-index:99;display:flex;
	height:rem(98px);width:rem(750px);
}
a{
display:flex;
color:#fff;
width:rem(290px);
background:#ff5f9b;
align-items:center;justify-content:center;
@include font-dpr(30px);

i{
margin-right:rem(24px);color:#fff;
	
}
&:nth-child(1){
	i{width:rem(168px);text-align:center;margin-right:rem(0px);}
	width:rem(168px);
	background:#00368f;
	margin-right:rem(1px);
}
&:nth-child(2){margin-right:rem(1px);}
}

.nav{z-index:1000;transition:margin-left 0.2s;}
</style>