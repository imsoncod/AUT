var sub = ['정치왕', '싸이코', '엘리트', '배신자', '순수한', '귀요미', '블랙홀', '대담한'];

var main = ['크루원','크루원','크루원','크루원','임포스터'];

window.onload = function(){
	sub_idx = makeCnt(0,8);
	main_idx = makeCnt(0,5)
	if(main_idx == 4){
		$('#result').css('color', 'red');
	}
	$('#result').text(sub[sub_idx] + ' ' + main[main_idx]);
}

function makeCnt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}