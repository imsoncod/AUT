var pos = 0;
var wrap = 0;
var wrap = 0;
var len = 0;

var question_no = 1;

const all = ele => document.querySelectorAll(ele)
const one = ele => document.querySelector(ele)

window.onload = function(){
	wrap = one('.question_wrapper') // .slide 선택
	target = wrap.children[0] // .slide ul 선택
	len = target.children.length // .slide li 갯수
	// .slide ul의 너비 조정
	target.style.cssText = `width:calc(100% * ${len});display:flex;transition:0.5s`
	// .slide li의 너비 조정
	Array.from(target.children)
	.forEach(ele => ele.style.cssText = `width:calc(100% / ${len});`)
}

$(function(){
	$('.answer').click(function(){
		pos = (pos + 1) % len // 장면 선택
		target.style.marginLeft = `${-pos * 100}%`
	})
});