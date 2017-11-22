<template>
	<div id="city">
		<mt-header title="逛画廊">
	  		<mt-button  slot="left"  @click="$router.go(-1)">
	  			<img class="mail" src="../assets/mail.png" alt="">
	  		</mt-button>
	  		<mt-button  slot="right" >
	  			<img src="../assets/search.png" alt="" >
	  		</mt-button>
		</mt-header>
		<img class="galler_bg" src="../assets/galler_bg.jpg" alt="">
		<div class="content" v-for='i of List'>
			<div class="text clearfix">
				<div class="fl">{{i.type}}</div>
				<div class="fr">查看更多</div>
			</div>
			<div class="reveal">
				<div v-for='(x,index) of i.imgList' >
					<img :src="x.img" alt=""  @click='gotoDetail(i.imgList,index)'>
					<div class="descript">{{x.title}}</div>
					<div>{{x.address}}</div>
				</div>
			</div>
		</div>
		<bottom index='3'></bottom>
	</div>
</template>
<script>
	import bottom from './bottom.vue'
	export default{
		name:"city",
		components:{bottom},
		data(){
			return {
				List:[]
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/galleries.json")
				.then(response=>{
					this.List=response.data.List;
				})
			},
			gotoDetail(info,index){
				this.$router.push({path:"/detail/img_long"});
				this.$store.dispatch('setImgInfo',info[index]);
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped>
	#city{
		padding-bottom: 40px;
	}
	.mail{
		width: 24px;
		height: 18px;
	}
	.galler_bg{
		width: 100%;
	}
	.content{
		margin: 15px 10px ;
		margin-bottom: 10px;
		padding-bottom: 10px;
	}
	.text .fr{
		padding-right: 20px;
		background: url(../assets/red_right.png) no-repeat right;
		background-size: 10px 12px;
		color: rgb(210,91,9);
	}
	.reveal{
		display: flex;
		justify-content:space-between;
		margin-top: 10px;
	}
	.text{
		padding: 4px 0;
		height: 22px;
		line-height: 14px;
		border-left: 6px solid rgb(206,80,78);
	}
	.text .fl{
		margin-left: 6px;
	}
	.reveal div{
		width:31%; 
	}
	.reveal img{
		width: 100%;
		height: 150px;
	}
	.reveal .descript{
		width: 90%;
		font-size: 13px;
	}
	.reveal .descript+div{
		width: 80%;
		height: 12px;
		margin-top: 12px;
		font-size: 12px;
		color: rgba(50,50,50,0.5);
	}
</style>