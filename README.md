# swiper
swiper插件修改版，解决iphone 6plus微信闪退问题

### 因为6 plus存在使用3d加速引擎，闪退现象，特修改swiper运动方式源码，进行区别

#调用实例:
##判断手机系统调用不同的切换方式，ios使用effect的fade形式，开通crossFade
<pre><code>if( /iPhone|iPad|iPod Mini/i.test(navigator.userAgent) ) {
	  var swiperV = new Swiper('.swiper-container-v', {
						            direction:'vertical',
							        mousewheelControl:true,
							        effect : 'fade',
									fade: {
									  crossFade: true,
									}
								});
}else{
   var swiperV1 = new Swiper('.swiper-container-v', {
	 loop:false,
	 direction:'vertical',
	 mousewheelControl:true,
}
</code></pre>

