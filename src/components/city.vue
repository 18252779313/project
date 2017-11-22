<template>
	<div id="city">
		<mt-header title="南京">
	  		<mt-button  slot="left"  @click="$router.go(-1)">
	  			<img class="mail" src="../assets/mail.png" alt="">
	  		</mt-button>
	  		<mt-button  slot="right" >
	  			<img src="../assets/search.png" alt="" >
	  		</mt-button>
		</mt-header>
		<img class="city_bg" src="../assets/city_bg.jpg" alt="">
		<div class="content" v-for='i of List'>
			<div class="text clearfix">
				<div class="fl">{{i.type}}</div>
				<div class="fr">{{i.number}}场</div>
			</div>
			<div class="reveal">
				<div v-for='(x,index) of i.imgList'>
					<img  @click='gotoDetail(i.imgList,index)' :src="x.img" alt="" >
					<div class="descript">{{x.title}}</div>
				</div>
			</div>
		</div>
				
		<bottom index='2'></bottom>
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
				this.$http.get("./static/city.json")
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
		padding-bottom: 50px;
	}
	.mail{
		margin-right: 30px;
		width: 24px;
		height: 18px;
	}
	a{
		color: black;
	}
	.city_bg{
		width: 100%;
		margin-bottom: 10px;
	}
	.circle{
		width:70px;
		height:70px;
		border-radius: 50%;
		color: white;
		line-height: 70px;
		text-align: center;
		vertical-align: center;
	}
	.circle img{
		width: 30px;
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
	.content{
		margin: 0 10px;
		margin-bottom: 10px;
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
	.reveal div{
		width:31%; 
	}
	.reveal img{
		width: 100%;
		height: 150px;
	}
	.reveal .descript{
		width: 80%;
		font-size: 14px;
	}
</style>