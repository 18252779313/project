<template>
	<div id="ask">
		<mt-header title="问答">
			<mt-button slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
			</mt-button>
		</mt-header>
		<img src="../assets/ask_head.jpg" class="headPic" alt="">
		<div class="head">
			<span @click="index=0">最新</span>
			<span @click="index=1">热门</span>
		</div>
		<div class="content" v-for="i of List" v-if='index==0' @click='gotoDetail(i)'>
			<h1>{{i.title}}</h1>
			<div class="introduce">{{i.introduce}}</div>
			<div v-if='i.imgdecript.id!=0' class="imgdecript">
				<img :src="i.imgdecript.img" alt="">
				<span>{{i.imgdecript.detail}}</span>
			</div>
			<div class="footer clearfix">
				<div class="fl">{{i.point}}个观点</div>
				<div class="fl">{{i.agree}}个赞同</div>
				<div class="fr">+订阅</div>
			</div>
		</div>
		<div class="content" v-for="i of hotList" v-if='index==1' @click='gotoDetail(i)'>
			<h1>{{i.title}}</h1>
			<div class="introduce">{{i.introduce}}</div>
			<div v-if='i.imgdecript.id!=0' class="imgdecript">
				<img :src="i.imgdecript.img" alt="">
				<span>{{i.imgdecript.detail}}</span>
			</div>
			<div class="footer clearfix">
				<div class="fl">{{i.point}}个观点</div>
				<div class="fl">{{i.agree}}个赞同</div>
				<div class="fr">+订阅</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"ask",
		data(){
			return {
				List:[],
				hotList:[],
				index:0
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/ask.json")
				.then(response=>{
					this.List=response.data.List;
					this.hotList=response.data.hotList;
				})
			},
			gotoDetail(info){
				this.$router.push({path:"/detail/img"});
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
	.headPic{
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
	.content{
		margin: 15px;
	}
	.content h1{
		font-size: 16px;
		color:rgb(50,50,50);
		margin-bottom: 10px;
	}
	.content .introduce{
		font-size: 12px;
		color: rgba(50,50,50,0.8);
	}
	.content img{
		width: 40px;
		height: 40px;
	}
	.imgdecript{
		height: 40px;
		position: relative;
		margin: 20px 0;
	}
	.imgdecript span{
		font-size: 12px;
		color: rgb(50,50,50);
		position: absolute;
		top: 13px;
	}
	.footer{
		margin-top: 10px;
	}
	.content .footer{
		font-size: 12px;
		color: rgba(50,50,50,0.5)
	}
	.content .footer div:first-child{
		margin-right: 28px;
	}
	.content .footer div:last-child{
		color: rgb(50,50,50);
	}
</style>