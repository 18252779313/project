<template>
	<div id="draw">
		<mt-header title="学画">
			<mt-button slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
			</mt-button>
			<mt-button slot="right" >
				<img src="../assets/draw_love.png" class="love" alt="">
			</mt-button>
		</mt-header>
		<div class="out">
			<router-link to='/sketch'> 
				<div class="circle sketch">素描</div>
			</router-link>
			<router-link to='/gouache'>
				<div class="circle gouache">水粉</div>
			</router-link>
			<router-link to='/oil'>
				<div class="circle oil">油画</div>
			</router-link>
		</div>
		<div class="out_next">
			<router-link to='/water'>
				<div class="circle water">水彩</div>
			</router-link>
			<router-link to='/pen'>
				<div class="circle pen">工笔画</div>
			</router-link>
			<router-link to='/speed'>
				<div class="circle speed">速写</div>
			</router-link>
		</div>
		<div class="gray"></div>
		<div class="list" v-for="i of List" @click='gotoDetail(i)'>
			<img :src="i.avatar" alt="">
			<span class="author">{{i.author}}</span>
			<span class="time">{{i.time}} &nbsp;&nbsp;&nbsp;上传</span>
			<span class="love"></span>
			<div class="video">
				<div class="bg_gray">
					<div class="play"></div>
				</div>
				<img :src="i.img" alt="">
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"draw",
		data(){
			return {
				List:[]
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/draw.json")
				.then(response=>{
					this.List=response.data.List;
				})
			},
			gotoDetail(info){
				this.$router.push({path:"/detail/video"});
				this.$store.dispatch('setImgInfo',info);
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped>
	.love{
		width: 20px;
	}
	.out,.out_next{
		width: 100%;
		display: flex;
		justify-content: space-around;
		padding: 0 10px;
		margin: 30px 0;
	}
	.circle{
		width:77px ;
		height: 77px;
		border-radius: 50%;
		color: white;
		line-height: 77px;
		text-align: center;
	}
	.out .sketch{
		background: rgb(69,205,203);
	}
	.out .gouache{
		background: rgb(206,80,78);
	}
	.out .oil{
		background: rgb(83,168,128);
	}
	.out_next .water{
		background: rgb(214,164,155);
	}
	.out_next .pen{
		background: rgb(189,203,220);
	}
	.out_next .speed{
		background: rgb(215,98,129);
	}
	.list{
		margin:20px 12px ;
		position: relative;
	}
	.list>img{
		width: 60px;
		height: 60px;
		border-radius: 50%;
	}
	.gray{
		background-color: rgb(242,242,242);
		height: 10px;
	}
	.list .author{
		position: absolute;
		top: 10px;
		left: 75px;
		font-size: 16px;
		font-weight: bold;
	}
	.list .time{
		font-size: 12px;
		color: rgba(50,50,50,0.5);
		position: absolute;
		top: 35px;
		left: 75px;
	}
	.list .love{
		width: 20px;
		height: 20px;
		background: url(../assets/red_love.png) no-repeat ;
		background-size: 100%;
		position: absolute;
		right: 0;
		top: 14px;
	}
	.video{
		position: relative;
	}
	.list .video img{
		width: 100%;
		margin-top: 20px;
	}
	.bg_gray{
		position: absolute;
		top: 20px;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(51,51,51,0.8);
		display: flex;
		justify-content:center;
	}
	.play{
		width: 60px;
		height: 60px;
		background: url(../assets/play.png);
		align-self:center;
		border-radius: 50%;
	}
</style>