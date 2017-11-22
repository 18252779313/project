<template>
	<div id="show">
		<mt-header title="全球展览">
			<mt-button slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
			</mt-button>
			<mt-button slot="right" >
				<img src="../assets/show_classify.png" size="large" class="classify" alt="">
			</mt-button>
		</mt-header>
		<div class="content">
			<img src="../assets/show_head.png" alt="">
			<div class="head">
				<span @click='index=0'>最新</span>
				<span @click='index=1'>推荐</span>
				<span @click='index=2'>兴趣</span>
			</div>
			<div class="list" v-for="i of List" v-if='index==0' @click='gotoDetail(i)'>
				<h4>{{i.title}}</h4>
				<div class="detail">
					<span>{{i.address}}</span>
					<span>{{i.time}}</span>
				</div>
				<div class="imgList">
					<img :style="{width:100/i.imgList.length+'%'}" v-for="x of i.imgList" v-lazy="x.img" alt="" :class="i.imgList.length==1?'nopandding':'padding'">
				</div>
			</div>
			<div class="list" v-for="i of recommendList" v-if='index==1' @click='gotoDetail(i)'>
				<h4>{{i.title}}</h4>
				<div class="detail">
					<span>{{i.address}}</span>
					<span>{{i.time}}</span>
				</div>
				<div class="imgList">
					<img :style="{width:100/i.imgList.length+'%'}" v-for="x of i.imgList" v-lazy="x.img" alt="" :class="i.imgList.length==1?'nopandding':'padding'">
				</div>
			</div>
			<div class="list" v-for="i of interList" v-if='index==2' @click='gotoDetail(i)'>
				<h4>{{i.title}}</h4>
				<div class="detail">
					<span>{{i.address}}</span>
					<span>{{i.time}}</span>
				</div>
				<div class="imgList">
					<img :style="{width:100/i.imgList.length+'%'}" v-for="x of i.imgList" v-lazy="x.img" alt="" :class="i.imgList.length==1?'nopandding':'padding'">
				</div>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default{
		name:"show",
		data(){
			return {
				List:[],
				recommendList:[],
				interList:[],
				index:0
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/show.json")
				.then(response=>{
					this.List=response.data.List;
					this.recommendList=response.data.recommendList;
					this.interList=response.data.interList;
				})
			},
			gotoDetail(info){
				this.$router.push({path:"/detail/img_more"});
				this.$store.dispatch('setImgInfo',info);
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped>
	.classify{
		width:60px;
	}
	.content{
		padding:0 10px;
	}
	.content>img{
		width: 100%;
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
	.list{
		margin-top: 20px;
	}
	.list h4{
		font-size: 16px;
	}
	.list .detail{
		font-size: 12px;
		color: rgb(50,50,50);
		margin-top: 5px;
		margin-bottom: 10px;
	}
	.list .detail>span{
		margin-right: 10px;
	}
	.imgList{
		display: flex;
		/*width: 100%*/
	}
	.imgList img{
		padding-right: 22px;
		height: 100%;
	}
	.imgList img:last-child{
		padding:0 0 0 22px;
	}
	.list .imgList .nopandding{
		padding: 0;
	}
	.list .imgList:last-child{
		margin-bottom: 20px;
	}
</style>