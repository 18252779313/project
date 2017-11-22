<template>
	<div id="index">
		<div class="logo">
			<img src="../assets/logo.png" alt="">
		</div>
		<router-link to='/login'>
			<div class="btn">登陆</div>
		</router-link>
		<router-link to='/register'>
			<div class="btn register">注册</div>
		</router-link>
		<router-link to='/home/0'>
			<div class="storll">随便逛逛</div>
		</router-link>
		<div class="quick">快速登录</div>
		<div class="icon">
			<div></div>
			<div></div>
			<div></div>
		</div>
	</div>
</template>
<script>
	export default{
		name:"index",
		date(){
			return {

			}
		}
	}
</script>
<style scoped>
	#index{
		background: url(../assets/login_bg.png) no-repeat;
		width: 100%;
		background-size: 100% 660px;
		height: 660px;
		padding-top: 96px;
	}
	a{
		text-decoration: none;
	}
	.logo{
		text-align: center;
		margin-bottom: 38px;
	}
	.logo img{
		width: 108px;
		height: 108px;
	}
	.btn{
		width: 250px;
		margin: auto;
		background: rgb(23,138,84);
		text-align: center;
		border-radius:30px;
		height: 45px;
		line-height: 45px;
		color: rgb(255,255,255);
		margin-bottom: 16px;
	}
	.register{
		background-color: rgb(194,70,68);
	}
	.storll{
		width: 250px;
		margin: auto;
		text-align: right;
		margin-bottom: 50px;
		color: rgb(255,255,255);
	}
	.quick{
		width: 250px;
		margin: auto;
		text-align: center;
		padding-bottom: 10px;
		border-bottom: 1px solid rgb(255,255,255);
		margin-bottom: 35px;
		color: rgb(255,255,255);
	}
	.icon{
		width: 250px;
		margin: auto;
		margin-top: 30px;
		height: 34px;
		display: flex;
		justify-content:space-between;
		padding-bottom: 80px;
	}
	.icon div{
		width: 40px;
		height: 45px;
		background: white;
	}
	.icon div:first-child{
		background: url(../assets/qq.png) no-repeat;
		background-size:34px 34px;
	}
	.icon div:nth-child(2){
		background: url(../assets/wx.png) no-repeat center;
		background-size: 100%;
	}
	.icon div:last-child{
		background: url(../assets/wb.png) no-repeat;
		background-size: 100%;
	}
</style>