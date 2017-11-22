<template>
	<div id="last">
		<mt-header title="交易查询">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  		</mt-button>
	  	</mt-header>
		<div class="words">您尚未购买物品</div>
	 </div>
</template>
<script >
	
</script>
<style>
	.words{
		text-align: center;
		color: rgba(50,50,50,0.5);
		margin-top: 20px;
	}
</style>