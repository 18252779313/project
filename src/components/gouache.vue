<template>
	<div id="gouache">
		<mt-header title="水粉">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  		</mt-button>
	  	</mt-header>
	  	<div class="contain">
	  		<h2>水粉风景画教程</h2>
	  		<h3>（一）.什么是水粉风景画</h3>
			<div class='text'>在这里先说说什么是水粉画吧，水粉画顾名思义就是要用水的，当然还有颜料。水粉风景画就是用水粉画风景，学过画画的都应该知道。其实水粉，水彩差别不太大，主要是对水的控制不同。但是水粉和油画差别挺大的，从工具到画纸都有区别，有兴趣的可以自己下去查查，在这里就不讲了，我们主要说的是水粉风景画，下面发两张图片吧，大家可以看看。
			</div>
			<img src="../assets/gouache_1.jpg" alt="">
			<div class="text">上面这幅画颜色很鲜艳，笔触用的很多。</div>
			<img src="../assets/gouache_2.jpg" alt="">
			<div class="text">这幅画意境很美，笔触不多</div>
			<h3>（二）.水粉风景画所用的工具，话不多说直接上图吧。</h3>
			<img src="../assets/gouache_3.jpg" alt="">
			<div class="text">小桶是用来装水的，画画的时候需要用。用笔挑一些颜料放在调色盘上调匀，如果太干的话可以沾一些水，然后就可以画了。</div>
			<img src="../assets/gouache_4.jpg" alt="">
			<h3>（三）绘画步骤，直接上图﻿了</h3>
			<img src="../assets/gouache_5.jpg" alt="">
			<div class="explain">原图和成品</div>
			<img src="../assets/gouache_6.jpg" alt="">
			<div class="explain">起稿</div>
			<img src="../assets/gouache_7.jpg" alt="">
			<div class="explain">铺色</div>
			<img src="../assets/gouache_8.jpg" alt="">
			<div class="explain">塑造</div>
			<img src="../assets/gouache_9.jpg" alt="">
			<div class="explain">调整画面，成品</div>
	  	</div>
	</div>
</template>
<style scoped>
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
	.explain{
		text-align: center;
	}
</style>