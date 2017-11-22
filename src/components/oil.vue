<template>
	<div id="oil">
		<mt-header title="油画">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  		</mt-button>
	  	</mt-header>
	  	<div class="contain">
	  		<h2>新手基础油画教程</h2>
	  		<h3>第一，准备画具。</h3>
	  		<div class="text">画油画前需要把画具准备齐全。画布要绷在木质画框上。布纹的粗细及吸油效果根据作画效果而定。
			</div>
			<img src="../assets/oil_1.png" alt="">
			<h3>第二，选择描绘对象。</h3>
	  		<div class="text">
			入门时可以选择临摹，可以练习静物画，可以画风景或者人物。
			在绘画之前要准备好要描绘的对象。
			</div>
			<img src="../assets/oil_2.png" alt="">
			<h3>第三，勾勒草稿。观察要描绘的对象，在纸上勾勒出设想好的草稿。 </h3>
	  		<div class="text">观察要描绘的对象，在纸上勾勒出设想好的草稿。 
			</div>
			<img src="../assets/oil_3.png" alt="">
			<h3>第四，画素描稿。</h3>
	  		<div class="text">在纸上画好草稿写生后，进一步描绘，提炼概括。尽量抓住描绘对象的外部和内部特征。
			</div>
			<img src="../assets/oil_4.png" alt="">
			<h3>第五，在画布上画素描稿。</h3>
	  		<div class="text">
			将之前在纸上完善好的素描稿拷贝到画布上。
			这时要重点描绘轮廓线，注意休整形状。
			起素描稿可以不断修整以确定明确的形象。
			可用线条或简单色确定描绘对象的主体色调。
			</div>
			<img src="../assets/oil_5.png" alt="">
			<h3> 第六，描绘物体的立体感。</h3>
	  		<div class="text">根据描绘对象的特点，画出对象的立体感和质感、气氛。完善画面完成整幅作品
			</div>
			<img src="../assets/oil_6.png" alt="">
	  	</div>
	</div>
</template>
<style scoped="">
	.contain{
		margin: 0 10px;
	}
	.back{
    	width: 15px;
	}
	h3{
		margin:10px 0;
	}
	.text{
		text-indent: 2em;
	}
	img{
		width: 100%;
	}
</style>