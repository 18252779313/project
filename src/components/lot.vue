<template>
	<div id="lot">
		<mt-header title="拍品查询">
	  		<mt-button  slot="left"  @click="$router.go(-1)">
	  			<img class="back" src="../assets/back.png" alt="">
	  		</mt-button>
	  		<mt-button  slot="right" >
	  			<img src="../assets/search.png" alt="" >
	  		</mt-button>
		</mt-header>
		<div class="list" v-for="i of Math.ceil(list.length/2)">
			<div @click='gotoDetail(list[2*(i-1)])'>
				<img :src="list[2*(i-1)].img" alt="">
				<div class="explain">{{list[2*(i-1)].title}}</div>
				<div class="price">&yen;{{list[2*(i-1)].price}}</div>
			</div>
			<div @click='gotoDetail(list[2*i-1])'>
				<img :src="list[2*i-1].img" alt="">
				<div class="explain">{{list[2*i-1].title}}</div>
				<div class="price">&yen;{{list[2*i-1].price}}</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:"lot",
		data(){
			return {
				list:[]
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/lot.json")
				.then(response=>{
					this.list=response.data.List;
				})
			},
			gotoDetail(info){
				this.$router.push({path:"/goods"});
				this.$store.dispatch('setGoods',info);
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped>
	.list{
		display: flex;
		justify-content: space-around;
	}
	.list img{
		width: 100%;
		height: 100%;
	}
	.list>div{
		width: 50%;
		padding:0 10px;
		height: 200px;
		margin-bottom: 80px;
	}
	.explain{
		text-align: center;
		height: 40px;
	}
	.price{
		color: red;
		text-align: center;
	}
</style>