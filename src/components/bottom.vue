<template>
	<div class="bottom">
			<router-link to="/home" >
				<div class="home" :class="{'home_active':index==1}"></div>
			</router-link>
			<router-link to="/city">
				<div class="city" :class="{'city_active':index==2}"></div>
			</router-link>
			<router-link to="/galleries">
				<div class="galleries" :class="{'galleries_active':index==3}"></div>
			</router-link>
			<router-link to="/auction">
				<div class="auction" :class="{'auction_active':index==4}"></div>
			</router-link>
			<router-link to="/personal">
				<div class="personal" :class="{'personal_active':index==5}"></div>
			</router-link>
		</div>
</template>
<script>
	export default{
		name:"bottom",
		data(){
			return {
				isCity:0,
			}
		},
		props:["index"]
	}
</script>
<style >
	.bottom{
    width: 100%;
    height: 50px;
    background: rgb(24,23,28);
    position: fixed;
    bottom: 0;
    padding: 0 26px;
    display: flex;
    justify-content:space-between;
  	}
	.bottom div{
    padding: 5px 0;
    height: 50px;
    width: 30px;
	}
	.bottom .home{
    background: url(../assets/home.png) no-repeat center;
    background-size: 100%;
 	}
  	.bottom .city{
    background: url(../assets/city.png) no-repeat center;
    background-size: 100%;
  	}
 	 .bottom .galleries{
    background: url(../assets/galleries.png) no-repeat center;
    background-size: 100%;
  	}
  	.bottom .auction{
    background: url(../assets/auction.png) no-repeat center;
    background-size: 100%;
 	}
 	.bottom .personal{
    background: url(../assets/personal.png) no-repeat center;
    background-size: 100%;
 	}
 	.bottom .home_active{
    background: url(../assets/home_active.png) no-repeat center;
    background-size: 100%;
 	 }
 	.bottom .city_active{
	background: url(../assets/city_active.png) no-repeat center;
   	 background-size: 100%;
 	}
 	 .bottom .galleries_active{
    background: url(../assets/galleries_active.png) no-repeat center;
    background-size: 100%;
  	}
  	.bottom .auction_active{
    background: url(../assets/auction_active.png) no-repeat center;
    background-size: 100%;
 	}
 	.bottom .personal_active{
    background: url(../assets/personal_active.png) no-repeat center;
    background-size: 100%;
 	}
</style>