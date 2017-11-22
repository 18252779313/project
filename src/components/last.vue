<template>
	<div id="last">
		<mt-header title="往期拍卖">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  		</mt-button>
	  	</mt-header>
		<div class="List" v-for='i of List'>
			<img :src="i.img" alt="">
			<div class="info clearfix">
				<div class="fl">{{i.title}}</div>
				<div class="fr price">&yen;{{i.price}}</div>
			</div>
			<div class="descript">{{i.descript}}</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"city",
		data(){
			return {
				List:[]
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/last.json")
				.then(response=>{
					this.List=response.data.List;
				})
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style>
	img{
		width: 100%;
	}
	.info{
		
	}
	.price{
		color: red
	}
	.descript{
		
		font-size: 14px;
		color: rgba(50,50,50,0.5);
	}
	.List{
		margin: 10px ;
		padding-bottom: 10px;
		border-bottom: 1px solid rgb(182,182,182);
	}
</style>
