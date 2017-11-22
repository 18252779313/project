<template>
	<div id="live">
		<mt-header title="艺生live">
			<mt-button slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
			</mt-button>
		</mt-header>
		<div class="head">
			<span @click="index=0">最新</span>
			<span @click="index=1">热门</span>
		</div>
		<div  @click='gotoDetail(i)' class="upList" v-for="i of upList" v-if='index==0'>
			<img v-lazy="i.img" alt="">
			<div class="explian">
				<div class="title">{{i.title}}</div>
				<div class="type">{{i.type}}</div>
				<div class="time">
					<div>{{i.time}} <span>{{i.subscribe}}人已订阅</span></div>
				</div>
			</div>
		</div>
		<div class="upList" v-for="i of hotList" @click='gotoDetail(i)' v-if='index==1'>
			<img v-lazy="i.img" alt="">
			<div class="explian">
				<div class="title">{{i.title}}</div>
				<div class="type">{{i.type}}</div>
				<div class="time">
					<div>{{i.time}} <span>{{i.subscribe}}人已订阅</span></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"live",
		data(){
			return {
				upList:[],
				hotList:[],
				index:0
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/live.json")
				.then(response=>{
					this.upList=response.data.upDateList;
					this.hotList=response.data.hotList;
					console.log(this.hotList)
				})
			},
			gotoDetail(info){
				this.$router.push({path:"/detail/img_long"});
				this.$store.dispatch('setImgInfo',info);
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped="">
	.back{
		width: 15px;
	}
	.head{
		width: 100%;
		padding: 5px 15%;
		border-bottom:1px solid black;
		margin:auto;
		display: flex;
		justify-content: space-between;
		position: relative;
	}
	.head span{
		font-size: 18px;
	}
	.upList{
		margin: 10px;
		display: flex;
	}
	.upList img{
		/*height: 192px;*/
		margin-right: 10px;
		width: 40%;
		height: 100%;
	}
	.explian{
		padding: 15px 0;
		width: 58%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		/*color: rgb(50,50,50);*/
	}
	.explian .title{
		font-weight: bold;
	}
	.explian .type{
		font-size: 12px;
	}
	.explian .time{
		font-size: 12px;
		color: rgba(50,50,50,0.5);
	}
	.explian .time span{
		margin-left: 40px;
	}
</style>