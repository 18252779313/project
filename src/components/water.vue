<template>
	<div id="water">
		<mt-header title="水彩">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  		</mt-button>
	  	</mt-header>
	  	<div class="contain">
	  		<h2>水彩画虞美人</h2>
	  		<h3>第一.根据原图绘制铅笔手稿</h3>
	  		<div class="text">画用铅笔绘制的时候尽量画轻一点，要不然颜色浅的一些部分水彩颜料盖不住，影响总体效果。如果实在没注意画重了的话，用橡皮擦轻轻擦一擦就可以了。
			</div>
			<img src="../assets/water_1.jpg" alt="">
			<h3>第二，根据原图调色，画的虞美人，用朱红或深红都可以</h3>
	  		<div class="text">
			这个时候草稿纸就派上用场了，如果对调的颜色不确定的话，先在草稿纸上试一下色。也有一些专业人士是制作一张色卡，方便选色。
			</div>
			<img src="../assets/water_2.jpg" alt="">
			<h3>第三，从花瓣开始上色，先上一层浅的。</h3>
	  		<div class="text">我是用习惯了勾线笔，除了大面积的背景色以外，都用勾线笔来上，比较好控制边缘部分。
			一些水彩颜料会有水痕，如果上色不快一点的话，很容易留下不合适的痕迹，这种时候可以蘸点水在上面进行晕染，颜色会比较自然。﻿
			</div>
			<img src="../assets/water_3.jpg" alt="">
			<h3>第四，蘸取深色颜料来染深色部分。</h3>
	  		<div class="text">根据临摹的原图确定颜色的深浅部分，用深色颜料在深色部分再上一次色，边缘依旧可以用笔点一点水在上面，使之自然过渡。
			</div>
			<img src="../assets/water_4.jpg" alt="">
			<h3>第五，把笔上的红色颜料洗掉，保持水分，蘸取一点点黑色颜料来晕染阴影部分</h3>
	  		<div class="text">
			如果一不小心黑色颜料过多的话，不要着急，加一点水，或者用纸巾把过多的颜料吸掉。
			</div>
			<img src="../assets/water_5.jpg" alt="">
			<h3> 第六，勾绘花朵的细节，对比原图完善</h3>
	  		<div class="text">和原图有一点差异是正常的，不用太苛求太在意，继续画，不要放弃。
			</div>
			<img src="../assets/water_6.jpg" alt="">
			<h3> 第七，用草绿色来绘制花茎</h3>
	  		<div class="text">上部分连接花朵的那里上深一点的颜色，然后慢慢过渡，到下半部可以浅一点。
			依旧是老话重提，如果一不小心染了超过了铅笔线稿没关系，也不要试图把它添了一样宽，继续画就可以，到最后你会发现超的那一点根本没什么影响。
			</div>
			<img src="../assets/water_7.jpg" alt="">
			<h3> 第八，用草绿色染花苞和果实，深色部分稍稍点一点棕色上去</h3>
			<img src="../assets/water_8.jpg" alt="">
			<h3> 第九，绘制花茎的细节</h3>
	  		<div class="text">虞美人的花茎上有小毛毛，用勾线笔随意的画上几笔，尽量画轻一点，能看出来即可，不要画得太粗。
			</div>
			<img src="../assets/water_9.jpg" alt="">
			<h3> 第十，用你喜欢的字体签上你的大名或笔名或艺名反正随你什么名啦，这样就完工啦。日期可签也可不签，随你高兴。</h3>
	  		<div class="text">你也可以像我一样用剩余的颜料签，这样看起来比较和谐，我以前也用过钢笔、铅笔签，但总觉得不太和谐。反正这个就看你个人喜好了。
			</div>
			<img src="../assets/water_10.jpg" alt="">
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