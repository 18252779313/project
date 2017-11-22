<template>
	<div id="home">
		<div class="head ">
			<mt-header title="发现">
	  			<mt-button  slot="left">
	  				<img class="mail" src="../assets/mail.png" alt="">
	  				<img src="../assets/person.png" alt="" class="person">
	  			</mt-button>
	  			<mt-button  slot="right" >
	  				<img src="../assets/pen.png" alt="" >
	  			</mt-button>
			</mt-header>
		</div>
		<div class="search">
			<input type="text" placeholder="搜索展览、作品、艺术家和机构">
		</div>
		<div class="main">
			<div class="viewList">
					<router-link to="/live">
						<div class="box live">
							艺生live
						</div>
					</router-link>
					<router-link to="/recommend">
						<div class="box recommend">
							达人推荐
						</div>		
					</router-link>
					<router-link to="/ask">
						<div class="box ask">
							问答
						</div>		
					</router-link>
					<router-link to="/show">
						<div class="box show">
							全球展览
						</div>		
					</router-link>
					<router-link to="/draw">
						<div class="box draw">
							学画
						</div>	
					</router-link>
			</div>
			<div class="hot " v-for='i of dataList'>
				<div class="clearfix">
					<div class="hotpic fl" :style="{backgroundImage:'url('+i.avatar+')'}"></div>
					<div class="fl author">{{i.author}}</div>
					<div class=" fr">来自 {{i.type}}</div>
				</div>	
				<img v-lazy="i.img" alt="" @click='gotoDetail(i)'>
			</div>
		</div>
		<bottom index="1"></bottom>
	</div>
</template>
<script>
	import bottom from './bottom.vue'
	export default{
		name:"home",
		data(){
			return {
				dataList:[]
			}
		},
		methods:{
			getData(){
				this.$http.get("./static/data.json")
				.then(response=>{
					this.dataList=response.data.dataList;
				})
			},
			gotoDetail(info){
				this.$router.push({path:"/detail/img"});
				this.$store.dispatch('setGoods',info);
			}
		},
		components:{bottom},
		created(){
			this.getData();

		}
	}
</script>
<style scoped>
	#home{
		padding-bottom: 40px;
	}
	.head{
		background: rgb(24,23,28);
		margin-bottom: 12px;
	}
	.head .mail{
		margin-right: 30px;
		width: 24px;
		height: 18px;
	}
	.head .person{
		width: 22px;
		height: 22px;
	}
	.head img:last-child{
		width: 22px;
		height: 22px;
	}
	.search{
		width: 70%;
		margin: auto;
		text-align: center;
		margin-bottom: 21px;
	}
	.search input{
		height: 42px;
		width: 100%;
		font-size: 12px;
		line-height: 42px;
		outline: none;
		border-radius: 10px;
		border:2px solid rgba(50,50,50,0.5);
		padding-left: 40px;
		background: url(../assets/search.png) no-repeat center left 10px;
	}
	.main{
		margin: 0 10px;
	}
	.viewList{
		position: relative;
		height: 218px;
	}
	.box{
		width: 38%;
		height: 90px;
		background-color: red;
		margin-bottom: 19px;
		border-radius: 10px;
		position: absolute;
		background: rgb(69,205,203);
		text-align: center;
		line-height: 90px;
	}
	.viewList a{
		color: rgb(255,255,255);
		text-decoration: none;
	}
	.recommend{
		right: 0;
		background: rgb(166,175,216);
	}
	.ask{
		left: 0;
		top: 109px;
		background: rgb(78,158,200);
	}
	.show{
		right: 0;
		top: 109px;
		background: rgb(211,81,115);
	}
	.draw{
		top: 55px;
		left: 30%;
		background: rgb(157,14,6);
	}
	.hot{
		margin-bottom: 10px;
	}
	.hot>div{
		padding-bottom: 10px;
	}
	.hotpic{
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: no-repeat;
		background-size: 100%;
		margin-right: 10px;
	}
	.hot .author{
		line-height: 48px;
		font-weight: bold;
	}
	.hot .fr{
		color: rgba(50,50,50,0.5);
		line-height: 48px;
	}
	.hot img{
		width: 100%;
	}
</style>