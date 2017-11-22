<template>
	<div id="cart">
		<mt-header title="购物车">
	  		<mt-button  slot="left"  @click="$router.go(-1)">
	  			<img class="back" src="../assets/back.png" alt="">
	  		</mt-button>
		</mt-header>
			<div class="list" v-if='show'>
				<div class="fl pic">
				<img :src="goods.img" alt="">
				</div>
				<div class="fl descript">
				<div class="title">{{goods.title}}</div>
				<!-- <div class="price">价格：&yen; {{goods.price}}</div> -->
				<div class="mount clearfix">
					<div class="btn fl sub" @click='number<2?number=1:number--'></div>
					<input class="number fl" type="text" v-model='number'>
					<div class="btn fl add" @click='number++'></div>
					<div class="fl price">&yen; {{number*goods.price}}</div>
				</div>
				</div>
			</div>
			<div class="bott">
				<div class="fr total" >总价 <span>&yen;{{number*goods.price}}</span></div>
				<div class="fr order" @click='order()'>下单</div>
			</div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	export default{
		name:"cart",
		data(){
			return {
				number:1,
				show:1,
			}
		},
		computed:{
			goods:function(){
				return this.$store.getters.getGoods;
			}
		},
		methods:{
			order(){
				MessageBox.confirm('确认购买？')
					.then(() => {
						MessageBox.alert('购买成功')
						this.show=0;
						this.number=0;
					},() => {
					});
			}
		}
	}
</script>
<style scoped="">
	.back{
		width: 15px;
	}
	img{
		width: 100%;
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
	.descript{
		margin-top: 20px;
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
		margin-top: 30px;
	}
	.btn{
		width: 30px;
		border: 1px solid gray;
		line-height: 20px;
		text-align: center;
		height: 20px;
		font-size: 20px;
	}
	.number{
		text-align: center;
		width: 40px;
		line-height: 18px;
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
	.price{
		color: red;
		margin-left: 60px;
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
	.fr{
		text-align: center;
	}
	.total{
		margin-left: 50%;
		width: 25%;
	}
	.total span{
		color: red
	}
	.order{
		width: 25%;
		color: white;
		background: rgb(235,85,32);
	}
</style>