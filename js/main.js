
//图片滚动开始
var speed = 20;
var scroll = document.getElementById("scroll");
var scrollList = document.getElementById("scroll-list");
var scrollEd = document.getElementById("scroll-ed");
scrollEd.innerHTML = scrollList.innerHTML;

function Marquee() {
	if (scrollList.offsetWidth - scroll.scrollLeft <= 0)
		scroll.scrollLeft -= scroll.offsetWidth
	else {
		scroll.scrollLeft++;
	}
}
var MyMar = setInterval(Marquee, speed);
scroll.onmouseover = function() {
	clearInterval(MyMar)
};
scroll.onmouseout = function() {
	MyMar = setInterval(Marquee, speed)
};