<template>
	<div id="personal">
		<mt-header title="我">
	  		<mt-button  slot="left"  @click="$router.go(-1)">
	  			<img class="mail" src="../assets/mail.png" alt="">
	  		</mt-button>
	  		<mt-button  slot="right" >
	  			<img src="../assets/search.png" alt="" >
	  		</mt-button>
		</mt-header>
		<div class="head clearfix" v-for='i of List'>
			<img class="avater fl" :src="i.avater" alt="">
			<div class="info fl">
				<div class="author">{{i.author}}</div>
				<div>艺生号：{{i.id}}</div>
			</div>
			<div class="fr">
				<span>主页</span>
			</div>
		</div>
		<div class="list" v-for='i of List'>
			<div>
				<div>{{i.note}}</div>
				<div class="words">笔记</div>
			</div>
			<div>
				<div>{{i.follow}}</div>
				<div class="words">关注</div>
			</div>
			<div>
				<div>{{i.fans}}</div>
				<div class="words">粉丝</div>
			</div>
			<div>
				<div>{{i.score}}</div>
				<div class="words">积分</div>
			</div>
			</div>
		<div class="option">
			<div class="topic">
				<span>我的话题</span>
				<div class="fr"></div>
			</div> 
			<div class="trip">
				<span>我的行程</span>
				<div class="fr"></div>
			</div>
			<div class="love">
				<span>我的收藏</span>
				<div class="fr"></div>
			</div>
			<div class="seal">
				<span>印款查询</span>
				<div class="fr"></div>
			</div>
			<div class="trade">
				<span>交易记录查询</span>
				<div class="fr"></div>
			</div>
			<div class="show">
				<span>展览记录查询</span>
				<div class="fr"></div>
			</div>
			<div class="online">
				<span>线上展</span>
				<div class="fr"></div>
			</div>
		</div>
		<bottom index='5'></bottom>
	</div>
</template>
<script>
	import bottom from './bottom.vue'
	export default{
		name:"personal",
		components:{bottom},
		data(){
			return {
				List:[]
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/personal.json")
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
<style scoped>
	#personal{
		padding-bottom: 30px;
	}
	.mail{
		margin-right: 30px;
		width: 24px;
		height: 18px;
	}
	.head{
		margin:20px 10px 40px;
	}
	.avater{
		width: 74px;
		height: 74px;
	}
	.info{
		margin-left: 10px;
		margin-top: 10px;
	}
	.author{
		font-size: 19px;
		margin-bottom: 10px;
		font-weight: bold;
	}
	.author+div{
		font-size: 12px;
		color: rgba(50,50,50,0.5);
	}
	.head .fr{
		line-height: 74px;
	}
	.head .fr span{
		padding-right: 20px;
		background: url(../assets/gary_right.png) no-repeat right center;
		background-size: 12px 14px;
		font-weight: bold;
	}
	.list{
		display: flex;
		justify-content: space-around;
		text-align: center;
		margin-bottom: 40px;
	}
	.list div{
		font-size: 16px;
		color: rgba(50,50,50,0.5);
	}
	.list .words{
		font-weight: bold;
		color: black;
		margin-top: 10px;
	}
	.option{
		margin: 10px;
	}
	.option div{
		padding-left: 50px;
		font-size: 16px;
		color: rgb(50,50,50);
		margin-bottom: 20px;
	}
	.option .topic{
		background: url(../assets/topic.png) no-repeat left 15px center;
		background-size:18px ;
	}
	.option .trip{
		background: url(../assets/trip.png) no-repeat left 15px center;
		background-size:18px ;
	}
	.option .love{
		background: url(../assets/love.png) no-repeat left 15px center;
		background-size:18px ;
	}
	.option .seal{
		background: url(../assets/seal.png) no-repeat left 15px center;
		background-size:18px ;
	}
	.option .trade{
		background: url(../assets/trade.png) no-repeat left 15px center;
		background-size:18px ;
	}
	.option .show{
		background: url(../assets/show.png) no-repeat left 15px center;
		background-size:18px ;
	}
	.option .online{
		background: url(../assets/online.png) no-repeat left 15px center;
		background-size:18px ;
	}
	.option>div>.fr{
		background: url(../assets/gary_right.png) no-repeat right;
		background-size:10px;
		width: 10px;
		height: 18px;
	}
</style>