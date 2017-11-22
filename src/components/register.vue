<template>
	<div id="register">
		<div class="words">注册</div>
		<div class="box"><input type="text" v-model='uname' placeholder="用户名/手机号/邮箱"></div>
		<div class="box pwd"><input type="password" v-model='pwd' placeholder="密码为6到12位数字或字母"></div>
		<div class="register" @click="confirm()">确认注册</div>
		<div class="agree"><input type="checkbox" v-model="agree">已阅读并同意用户协议</div>
	</div>
</template>
<script>
	import { MessageBox } from 'mint-ui';
	export default{
		name:"register",
		data(){
			return {
				uname:"",
				pwd:"",
				agree:1
			}
		},
		methods:{
			confirm(){
				var re =/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
				if(this.uname=="" || this.uname.length<9){
						MessageBox.alert('请输入不小于8位的用户名')
				}else{
					if (!re.test(this.pwd)) {
						MessageBox.alert('请输入到6到12位只包含数字或字母的密码')
					}else{
						if (this.agree==0) {
						MessageBox.alert('必须同意用户协议')
						}else{
							this.$router.push({path:"/home"})
						}
					}
				}

			}
		}
	}
</script>
<style scoped>
	#register{
		background: url(../assets/login_bg.png) no-repeat;
		width: 100%;
		background-size: 100% 660px;
		height: 660px;
		padding-top: 100px;
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
	#register .pwd{
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
	.agree{
		text-align: center;
		color: white;
		font-size: 15px;
		line-height: 15px;
	}
	.agree input{
		vertical-align: middle;
	}
</style>