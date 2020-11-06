//slide
var page = 0;
var wrap = 0;
var target = 0;
var len = 0;

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
		if(page>=9){
			page = 0;
			location.href = 'sign.html';
			return;
		}
		page = (page + 1) % len // 장면 선택
		target.style.marginLeft = `${-page * 100}%`
		$('#progress_bar').css('width',String((page+1)*10) + '%');
		$('#progress_bar').text(page+1 + '/10');
	})
});