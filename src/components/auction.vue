<template>
	<div id="city">
		<mt-header title="拍卖">
	  		<mt-button  slot="left"  @click="$router.go(-1)">
	  			<img class="mail" src="../assets/mail.png" alt="">
	  		</mt-button>
	  		<mt-button  slot="right" >
	  			<img src="../assets/search.png" alt="" >
	  		</mt-button>
		</mt-header>
		<div class="category">
			<div>
				<router-link to='/last'>
					<div class="circle last"></div>
					<div>往期拍卖</div>
				</router-link>
			</div>
			<div>
				<router-link to='/query'>
					<div class="circle query"></div>
					<div>交易查询</div>
				</router-link>
			</div>
			<div>
				<router-link to='/lot'>
					<div class="circle lot"></div>
					<div>拍品查询</div>
				</router-link>
			</div>
		</div>
		<div class="content" v-for='i of List'>
			<div class="text clearfix">
				<div class="fl">{{i.type}}</div>
				<div class="fr">查看更多</div>
			</div>
			<div class="reveal" @click='gotoDetail(i)'>
				<img class="full" :src="i.imgList[0].img" alt="" v-if='i.imgList.length==1' >
				<div class="two_pic clearfix" v-if='i.imgList.length==2' >
					<div class="fl">
						<img :src="i.imgList[0].img" alt="">
					</div>
					<div class="middle">
						<div class="title">{{i.title}}</div>
						<div class="address">{{i.address}}</div>
						<div class="time">{{i.time}}</div>
					</div>
					<div class="fr">
						<img :src="i.imgList[1].img" alt="">
					</div>
				</div>
			</div>
		</div>
		<bottom index='4'></bottom>
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
				this.$http.get("./static/auction.json")
				.then(response=>{
					this.List=response.data.List;
				})
			},
			gotoDetail(info,index){
				this.$store.dispatch('setImgInfo',info);
				this.$router.push({path:"/detail/img_more"})
			}
		},
		created(){
			this.getData();
		}
	}
</script>
<style scoped>
	#city{
		padding-bottom: 30px;
	}
	a{
		color: black;
	}
	.mail{
		margin-right: 30px;
		width: 24px;
		height: 18px;
	}
	.category{
		display: flex;
		justify-content: space-between;
		text-align: center;
		margin: 16px 10px 30px;
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
	.category .circle+div{
		margin-top: 12px;
	}
	.category .last{
		background: url(../assets/auction_1.png);
		background-size: 100%;
	}
	.category .query{
		background: url(../assets/auction_2.png);
		background-size: 100%;
	}
	.category .lot{
		background: url(../assets/auction_3.png);
		background-size: 100%;
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
	.text{
		padding: 4px 0;
		height: 22px;
		line-height: 14px;
		border-left: 6px solid rgb(206,80,78);
	}
	.text .fl{
		margin-left: 6px;
	}
	.full{
		width: 100%;
	}
	.reveal{
		margin-top: 15px;
	}
	.two_pic .fl,.two_pic .fr{
		width: 28%;
		height: 100%;
	}
	.two_pic .fl img,.two_pic .fr img{
		width: 100%;
	}
	.two_pic .middle{
		float: left;
		width: 40%;
		margin-left: 2%;
		font-size: 13px;
		margin-top: 4%;
	}
	.two_pic .middle .address,.two_pic .middle .time{
		font-size: 12px;
		color: rgba(50,50,50,0.8);
		margin-top: 5px;
	}
</style>