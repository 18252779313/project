<template>
	<div id="city">
		<mt-header title="分类看展">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  		</mt-button>
	  	</mt-header>
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">选项一</mt-tab-item>
		  <mt-tab-item id="2">选项二</mt-tab-item>
		  <mt-tab-item id="3">选项三</mt-tab-item>
		</mt-navbar>
		<!-- <div class="content" v-for='i of List'>
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
		</div> -->
		<mt-tab-container v-model="selected">
  			<mt-tab-container-item id="1">
   		 		<mt-cell v-for="n in 10" :title="'内容 ' + n" />
  			</mt-tab-container-item>
  			<mt-tab-container-item id="2">
    			<mt-cell v-for="n in 4" :title="'测试 ' + n" />
 	 		</mt-tab-container-item>
  			<mt-tab-container-item id="3">
    			<mt-cell v-for="n in 6" :title="'选项 ' + n" />
  			</mt-tab-container-item>
		</mt-tab-container>
		<!-- <ul class="list_box">
				<li v-for="i in List" class="clearfix" >
					<div class="fl img_box">
						<img v-lazy="i.img" alt="">
					</div>
					<div class="fl intro_box">
						<div class="title_label">
							{{i.title}}
						</div>
						<div class="author_label">{{i.author}}</div>
						<div class="des_label">
							{{i.description}}
						</div>
						<div class="info_label">
							#{{i.type}}
							<div class="fr">
								<span class="comment">{{i.comment}}</span>
								<span class="favorite">{{i.favorite}}</span>
							</div>
						</div>
					</div>
				</li>
			</ul>		 -->
	</div>
</template>
<script>
	export default{
		name:"city",
		data(){
			return {
				List:[],
				selected:1
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
	.mail{
		margin-right: 30px;
		width: 24px;
		height: 18px;
	}
	.back{
		width: 15px;
	}
	a{
		color: black;
	}
	.city_bg{
		width: 100%;
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
	.category .show{
		background: url(../assets/city_show.png);
		background-size: 100%;
	}
	.category .hot{
		background: url(../assets/city_hot.png);
		background-size: 100%;
	}
	.category .calendar{
		background: url(../assets/city_calendar.png);
		background-size: 100%;
	}
	.category .near{
		background: url(../assets/city_near.png);
		background-size: 100%;
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
		padding-bottom: 50px;
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