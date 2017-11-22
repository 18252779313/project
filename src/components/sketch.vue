<template>
	<div id="sketch">
			<mt-header title="素描">
			<mt-button  slot="left"  @click="$router.go(-1)">
				<img src="../assets/back.png" class="back" alt="">
	  		</mt-button>
	  	</mt-header>
	  	<div class="contain">
		<h2>素描静物入门教程绘画步骤</h2>
		<img src="../assets/sketch_1.jpg" alt="">
		<div class="text">摆了一组比较简单的静物，包括：可乐塑料瓶子、苹果、橘子和小西红柿、白色衬布，都是经常考到静物。所以平时应该多练习画。动笔前应该先分析整幅画面的构图、色调，哪里最暗，哪亮一些做到心中有数，给排出一个1、2、3的大顺序来。
		</div>
		<img src="../assets/sketch_2.jpg" alt="">
		<div class="text">
			第一步：打形。重点：1.整个画面的构图，2.物体的形状和位置关系。做到放大线比较关系，概括大形，注意比例。
		</div>
		<img src="../assets/sketch_3.jpg" alt="">
		<div class="text">
			第二步：静物的位置比例和大形的关系有了，这一步就是将这些个素描关系具体。例如苹果由概括的圆圈上再切出几个面，可乐瓶起伏的造型，杯子口沿的透视关系等。
		</div>
		<img src="../assets/sketch_4.jpg" alt="">
		<div class="text">
			第三步：其实这一步有点画的太快了，应该把单纯的将所有的暗面铺出来，下一步再把灰面找出来。
		</div>
		<img src="../assets/sketch_5.jpg" alt="">
		<div class="text">
			第四步：用卫生纸擦了一下画面，明暗关系更丰富但也有点肉了。素描入门的学生就不要这样做了，不容易控制画面。在暗面和灰面各在加上一个层次。
		</div>
		<img src="../assets/sketch_6.jpg" alt="">
		<div class="text">
			第五步：进一步将暗面、灰面和亮面的关系明确，注意静物体积塑造，要依据结构来分析明暗变化。
		</div>
		<img src="../assets/sketch_7.jpg" alt="">
		<div class="text">
			第六步：深入刻画。将体积塑造充分后就是刻画细节，就是找那些更小的明暗变化来画。高光、固有色、图纹要处理好。局部服从整体，完成。
		</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	h3{
		margin: 10px;
		text-align: center;
	}
	img{
		width: 100%;
	}
	.back{
		width: 15px;
	}
	.text{
		text-indent: 2em;
	}
	.contain{
		margin: 0 10px;
	}
	h2{
		margin: 10px;
	}
</style>