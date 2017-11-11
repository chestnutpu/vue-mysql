<template>
	<section class="indexad">
	<router-link v-for="(item,key) in ConsultationData" :key="key" :to="item.url">
	<img :src="item.img_url" alt="">
	<section class="Consultation_content">
	<h3>{{item.title}}</h3>
	<p>{{item.pone}}</p>
	<span>{{item.ptwo}}</span>
	</section> 
	</router-link>
	</section>
</template>

<script>
export default {
  name: 'Consultation',
  props:{
    url:{
      type:String,
      default:""
    },
    
  },
  data() {
    return {
      msg: 'Consultation',
      ConsultationData:[]
     
    }
  },
  mounted(){//装载完毕的时候触发
   let _this=this;
    _this.$http({
      method:"get",
      url:this.url
    }).then(function(res){//res响应对象
      _this.ConsultationData=res.data;
      console.log(res.data);
    },function(err){
      console.log(err);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../assets/css/px2rem.scss";
.indexad{display:flex;flex-wrap:wrap;width:rem(750px);padding:0 rem(10px);justify-content:space-between;box-sizing:border-box;}
a{display:block;width:rem(360px);height:rem(200px);background:#fff;text-align:left;position:relative;margin-bottom:rem(10px);
	img{height:rem(200px);width:auto;}
	.indexad_content{position:absolute;left:rem(168px);top:rem(50px);}
	h3{color:#fe6ca1;@include font-dpr(24px);font-family:"方正兰亭中黑_GBK";margin-bottom:rem(14px);}
	p{color:#00368f;@include font-dpr(18px);line-height:rem(20px);}
}
a:nth-child(4){
	.indexad_content{position:absolute;top:rem(30px);left:rem(110px);}
	h3{color:#00368f;@include font-dpr(30px);}
	p{color:#ff69a1;margin-bottom:rem(28px);
	&:nth-child(3){color:#b0905a;margin-bottom:0px;}}

}

</style>
