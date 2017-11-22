<template>
	<div id="login">
		<div class="words">登录</div>
		<div class="box"><input type="text" v-model='uname' placeholder="用户名/手机号/邮箱"></div>
		<div class="box pwd"><input type="password" v-model='pwd' placeholder="输入密码"></div>
		<div class="register" @click="confirm()">登录</div>
		<div class="forget"><router-link	to='/forget'>忘记密码？</router-link></div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	export default{
		name:"login",
		data(){
			return {
				uname:"",
				pwd:"",
			}
		},
		methods:{
			confirm(){
				var re =/^[a-zA-Z0-9]{6,18}$/;
				if(this.uname=="" || this.uname.length<9){
						MessageBox.alert('用户名错误')
				}else{
					if (!re.test(this.pwd)) {
						MessageBox.alert('密码错误')
					}else{
							this.$router.push({path:"/home"})
						}
					}
				}
			
		}
	}
</script>
<style scoped>
	#login{
		background: url(../assets/login_bg.png) no-repeat;
		width: 100%;
		background-size: 100% 660px;
		height: 660px;
		padding-top: 100px;
		overflow: hidden;
	}
	.words{
		text-align: center;
		color: white;
		font-size: 20px;
		margin-bottom: 45px;
	}
	.box{
		width: 80%;
		margin: auto;
		text-align: center;
	}
	.box input{
		width: 100%;
		background: none;
		border: none;
		border-bottom: 1px solid white;
		padding-left: 15px;
		color: rgba(255,255,255,0.5);
		font-size: 15px;
		outline: none;
		margin-bottom: 26px;
		padding-bottom: 2px;
	}
	::-webkit-input-placeholder { 
    	color:rgba(255,255,255,0.5);
	}
	#login .pwd{
		margin-bottom: 20px;
	}	
	.register{
		width: 250px;
		margin: auto;
		background: rgb(23,138,84);
		text-align: center;
		border-radius:30px;
		height: 45px;
		line-height: 45px;
		color: rgb(255,255,255);
		margin-bottom: 20px;
		background-color: rgb(194,70,68);
	}
	.forget{
		text-align: center;
		color: white;
		font-size: 15px;
		line-height: 15px;
	}
	.forget a{
		color: white;
		text-decoration: none;
	}
</style>