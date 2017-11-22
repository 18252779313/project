<template>
	<div id="forget">
		<div class="words">忘记密码</div>
		<div class="box"><input type="text" v-model='uname' placeholder="手机号/邮箱"></div>
		<div class="box code">
			<button @click="send" class="codein">
  					<span v-if="sendMsgDisabled">{{time+'秒后获取'}}</span>
  					<span v-if="!sendMsgDisabled" class="send">发送验证码</span>
 			</button>
			<input type="text"  placeholder="请输入验证码">
		</div>
		<div class="box conform"><input type="password" placeholder="请输入新密码" v-model='pwd'></div>
		<div class="register" @click="confirm()">确认</div>
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
				agree:1,
				sendMsgDisabled:"",
				interval:null,
				time:60,
			}
		},
		methods:{
			confirm(){
				var re =/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,10}$/;
				var con= /(^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$)|(^1\d{10}$)/;
				if(!con.test(this.uname)){
						MessageBox.alert('请输入正确的手机号或者邮箱')
				}else{
					if (!re.test(this.pwd)) {
						MessageBox.alert('请输入到6到12位只包含数字或字母的密码')
					}else{
							this.$router.push({path:"/login"})
					}
				}
			},
			send() {
   			 	this.sendMsgDisabled = true;
   			 		if (!this.interval) {
   			 		this.interval = setInterval(() => {
    		 			if ((this.time--) <= 0) {
     		 			this.time = 60;
      					this.sendMsgDisabled = false;
     		 			window.clearInterval(this.interval);
     		 			this.interval=null;
    		 			}
    				}, 1000);
   			 	}
   			 	
  		 	}
		}
	}
</script>
<style scoped>
	#forget{
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
	#forget .conform{
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
	.code{
		position: relative;
	}
	.codein{
		position: absolute;
		right: 0;
		border-radius: 10px;
		background: none;
		outline: none;
		border:1px solid rgb(255,255,255);
		width: 90px;
		font-size: 14px;
		color:rgba(255,255,255,0.5);
	}
</style>