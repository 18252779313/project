<template>
	<div id="detail">
		<mt-header title="">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  	</mt-button>
		</mt-header>
		<div >
			<h3>{{imgInfo.title}}</h3>
			<div class="hot">
			<div class="clearfix">
				<div class="hotpic fl" :style="{backgroundImage:'url('+imgInfo.avatar+')'}"></div>
				<div class="fl author">{{imgInfo.author}}</div>
				<div class=" fr">{{imgInfo.time}}</div>
			</div>
			</div>
			<div class="full" v-if='type=="img"'>
				<img :src="imgInfo.img" alt="">
			</div>	
			<div class="long full" v-if='type=="img_long"'>
				<img :src="imgInfo.img" alt="">
			</div>
			<div class="full" v-for='i of imgInfo.imgList' v-if="type=='img_more'">
				<img :src="i.img" alt="">
				<div class="descript" v-html="i.descript"></div>
			</div>
			
				<video v-if='type=="video"' :src="imgInfo.video" controls=""></video>
			<div class="descript" v-html='imgInfo.descript'>

			</div>
		</div>
		
		
		
	</div>
</template>
<script>
	export default{
		name:"",
		data(){
			return {
				type:""
			}
		},
		methods:{
			getData(){
				this.type=this.$route.params.type
			}
		},
		computed:{
			imgInfo:function(){
				return this.$store.getters.getImgInfo;
			}
		},
		created(){
			this.getData()
		}
	}
</script>
<style scoped>
	.full{
		width: 90%;
		margin-bottom: 10px;
		margin:auto;
	}
	.long{
		width: 50%;
		margin: auto
	}
	.full img{
		width: 100%;
	}
	.full .descript{
		width: 100%;
		margin: auto;
	}
	.descript{
		text-indent: 2em;
		color: rgb(50,50,50);
		font-size: 15px;
		margin: 10px;
	}
	.authorInfo{
		margin: 10px;

	}
	.authorInfo img{
		width: 50px;
		height: 50px;
	}
	.hot{
		margin: 10px;
	}
	.hotpic{
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: no-repeat;
		background-size: 100%;
		margin-right: 10px;
		border:1px solid rgba(50,50,50,0.5);
	}
	.hot .author{
		line-height: 48px;
		font-weight: bold;
	}
	.hot .fr{
		color: rgba(50,50,50,0.5);
		line-height: 48px;
		font-size: 12px;
	}
	.hot img{
		width: 100%;
	}
	h3{
		text-align: center;
		margin: 10px;
	}
	video{
		width: 100%;
	}
</style>