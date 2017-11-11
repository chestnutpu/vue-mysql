<template>
	<section class="headercpm">
	<img  class="hdbg" src="../../assets/img/header.jpg" alt="">
	<p><i class="fa fa-list-ul"></i></p>	
	</section>
</template>

<style lang="scss" scoped>
@import "../../assets/css/px2rem.scss";
@import "../../assets/css/font-awesome.min.css";
	
.headercpm{z-index:99;display:flex;
	img{width:rem(588px);height:rem(110px);}
}
p{width:rem(162px);height:rem(110px);i{color:#ff5f9b;@include font-dpr(42px);}display:flex;align-items:center;justify-content:center;}
.nav{z-index:1000;transition:margin-left 0.2s;}
</style>