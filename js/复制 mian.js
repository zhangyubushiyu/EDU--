/*图片滚动功能开始*/
//定义变量
var scroll = document.getElementById("scroll");
var scroll1 = document.getElementById("scroll-1");
var scroll2 = document.getElementById("scroll-2");
scroll2.innerHTML = scroll1.innerHTML; //克隆一个list
//判断scroll的左边位置大于等于scroll1的宽度
function scrollLeft() {
	if (scroll.scrollLeft >= scroll1.scrollWidth) {
		scroll.scrollLeft = 0; //scroll左边位置=0
	} else {
		scroll.scrollLeft++;
	}
}
var speed = 20; //滚动速度 值越小滚动越快
var myScroll = setInterval('scrollLeft()', speed); //新建一个变量

//添加鼠标事件

//鼠标移入
scroll.onmouseover = function() {
	clearInterval(myScroll);//清除myScroll
}
//鼠标离开
scroll.onmouseout = function() {
	myScroll = setInterval('scrollLeft()', speed);//执行myScroll
}
