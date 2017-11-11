<template>
<section>
	<section class="hd_consultation">
		<img src="../assets/img/indecbg1.jpg" alt="">
		<router-link to="/tell"></router-link>
	</section>
	<section>
		<indexad :url="indexadjson"></indexad>
		<Consultation :url="Consultationjson"></Consultation>
	</section>
</section>	
</template>
<script>
	import flexible from "./assets/js/flexible.js"
</script>
<script>
import headecpm from "@/components/common/headercpm";
import indexad from "@/components/common/indexad";
import Consultation from "@/components/common/Consultation";



export default{
	name:"index",
	data(){
		return{
			msg:"index",
			indexadjson:"./static/api/indexad.json",
			Consultationjson:"./static/api/Consultation.json"
		}
	},
	mounted(){
	
	},
	components:{
		headecpm,
		indexad,
		Consultation

	},
	methods:{
		

	},
	computed:{
		

	}
}
	
</script>

<style lang="scss" scoped>
@import "../assets/css/px2rem.scss";
@import "../assets/css/animate.css";
.hd_consultation{
	position:relative;margin-bottom:rem(20px);
	img{width:rem(750px);height:rem(375px);}
	a{display:block;width:rem(274px);height:rem(65px);
	
	background-size:rem(274px) rem(65px);
	position:absolute;bottom:rem(48px);left:rem(30px);}
}

</style>
