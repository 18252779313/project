<template>
	<div id="goods" :class='{fix:fix==1}'>
		<mt-header >
	  		<mt-button  slot="left"  @click="$router.go(-1)">
	  			<img class="back" src="../assets/back.png" alt="">
	  		</mt-button>
		</mt-header>
			<img :src="goods.img" alt="">
			<div class="explain">
				<div class="title">{{goods.title}}</div>
				<div class="price">&yen; {{goods.price}}</div>
				<div class="introduce">商品简介</div>
			</div>
			<img :src="i" alt="" v-for='i of goods.introduce'>
		<div class="bott">
			<div class="service"></div>
			<div class="collect" @click='cart(goods)'></div>
			<div class="join" @click='shop()'>加入购物车</div>
			<div class="buy" @click='buy()'>立刻购买</div>
		</div>
		<div class="interface clearfix" v-if='show'>
			<div class="fl pic">
				<img :src="goods.img" alt="">
			</div>
			<div class="fl descript">
				<div class="title">{{goods.title}}</div>
				<div class="price">价格：&yen; {{goods.price}}</div>
			</div>
			<div class="mount">数量</div>
			<div class="btn fl sub" @click='number<2?number=1:number--'></div>
			<input class="number fl" type="text" v-model='number'>
			<div class="btn fl add" @click='number++'></div>
			<div class="sure" @click="sure()">确认</div>
			<div class="close" @click='show=false;fix=0;number=1'></div>
		</div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	export default{
		name:"goods",
		data(){
			return {
				show:false,
				fix:0,
				number:1,
			}
		},
		methods:{
			buy(){
				this.show=true;
				this.fix=1;
			},
			sure(){
				MessageBox.confirm('确认购买？')
					.then(() => {
						MessageBox.alert('购买成功')
					},() => {
					})
			},
			shop(){
				MessageBox.alert('收藏成功')
			},
			cart(info){
				this.$router.push({path:"/cart"});
				this.$store.dispatch('setGoods',info);
				console.log(info);
				console.log(typeof(info));
			}				
		},
		computed:{
			goods:function(){
				return this.$store.getters.getGoods;
			}
		}
	}
</script>
<style scoped>
	.fix{
		overflow: hidden;
		height: 300px;
	}
	.back{
		width: 15px;
	}
	#goods{
		padding-bottom: 50px;
	}
	img{
		width: 100%;
	}
	.explain{
		margin:10px;
	}
	.price{
		color: red;
		margin-top: 10px;
	}
	.introduce{
		margin-top: 20px;
		padding-left: 20px;
		background: url(../assets/right_tri.png) no-repeat left center;
		background-size: 18px;
	}
	.bott{
		position: fixed;
		height: 50px;
		width: 100%;
		background: white;
		bottom: 0;
		display: flex;
		line-height: 50px;
		text-align: center;
		border-top: 1px solid rgb(159,158,169);
	}
	.bott .service{
		width: 20%;
		background: url(../assets/service.png) no-repeat center;
		background-size: 20px;
	}
	.bott .collect{
		width: 20%;
		background: url(../assets/collect.png) no-repeat center;
		background-size: 20px;
	}
	.bott .join{
		width: 30%;
	}
	.bott .buy{
		width: 30%;
		color: white;
		background: rgb(235,85,32);
	}
	.interface{
		width: 100%;
		height: 400px;
		background: white;
		position: fixed;
		bottom: 0;
		z-index: 2;
		padding: 10px;
	}
	.interface .descript{
		margin-top: 35px;
		margin-left: 30px;
	}
	.pic{
		width: 30%;
		margin-top: 10px;
	}
	.sure{
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 40px;
		line-height: 40px;
		text-align: center;
		background: rgb(235,85,32);
		color: white
	}
	.close{
		background:url(../assets/close.png) no-repeat center;
		width: 50px;
		height: 50px;
		position: absolute;
		right: 0;
		top: 0;
	}
	.mount{
		clear: both;
		margin-bottom: 20px;
	}
	.interface .btn{
		width: 40px;
		border: 1px solid gray;
		line-height: 30px;
		text-align: center;
		height: 30px;
		font-size: 20px;
	}
	.number{
		text-align: center;
		width: 50px;
		line-height: 28px;
		border: none;
		outline: none;
		border: 1px solid gray;
	}
	.sub{
		background: url(../assets/sub.png) no-repeat center;
	}
	.add{
		background: url(../assets/add.png) no-repeat center;
	}
</style>