<template>
	<div id="recommend" class="clearfix">
		<mt-header title="达人推荐">
			<mt-button  slot="left" i @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
			</mt-button>
			<mt-button  slot="right"  >
				<img src="../assets/head_search.png" class="search" alt="">
			</mt-button>
		</mt-header>
		<div class="list fl" >
			<div @click="change(1)">热门</div>
			<div @click="change(2)">策展人</div>
			<div @click="change(3)">美术馆</div>
			<div @click="change(4)">画廊</div>
			<div @click="change(5)">拍卖行</div>
			<div @click="change(6)">古代书画</div>
			<div @click="change(7)">当代水墨</div>
			<div @click="change(8)">当代艺术</div>
			<div @click="change(9)">影像艺术</div>
			<div @click="change(10)">修复</div>
			<div @click="change(11)">收藏家</div>
			<div @click="change(12)">媒体</div>
			<div @click="change(13)">艺术机构</div>
		</div>
		<div class="master fr" v-for="i of dataList">
			<img class="fl" :src="i.img" alt="">
			<div class="descripe fl">
				<div class="name">
					<div>{{i.name}}</div>
					<div>{{i.position}}</div>
				</div>
			</div>
			<div class="add fr"></div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"recommend",
		data(){
			return {
				data:{},
				dataList:[],
				index:1
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/recommend.json")
				.then(response=>{
					this.data=response.data;
					this.dataList=response.data.List[0];
				})
			},
			change(x){
				this.dataList=this.data.List[x-1];
			}
		},
		created(){
			this.getData();
		},

	}
</script>
<style scoped>
	.back{
		width: 15px;
	}
	.search{
		width: 22px;
	}
	.list{
		border-right: 1px solid rgb(152,152,152);
		width: 28%;
	}
	.list div{
		margin-bottom: 26px;
		margin-left: 10px;
		color:rgb(50,50,50);
	}
	.master{
		width: 66%;
		margin-right: 15px;
		padding: 20px 0;
	}
	.master img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background-size: 10px;
	}
	.descripe .name div:first-child{
		margin-left: 10px;
		font-weight: bold;
		margin-top: -3px;
	}
	.descripe .name div:last-child{
		margin-left: 10px;
		font-size: 10px;
		color:rgba(50,50,50,0.5);
		margin-top: 8px;
	}
	.add{
		width: 22px;
		height: 22px;
		background: url(../assets/cir_add.png) no-repeat ;
		background-size: 100%;
		margin-top: 10px;
	}
</style>