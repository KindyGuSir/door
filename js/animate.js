function show(){
		// 可视区域
	var clients=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;
	
	var showId=document.getElementById("showDiv");
	var showId2=document.getElementById("showDiv2");
	var showId3=document.getElementById("showDiv3");

	var divTop=showId.getBoundingClientRect().top;
	var divTop2=showId2.getBoundingClientRect().top;
	var divTop3=showId3.getBoundingClientRect().top;


	if(divTop<=clients){
		
		showId.classList.add("fadeInLeft");

	}

	if(divTop2<=clients){
		
		showId2.classList.add("fadeIntop");

	}

	if(divTop3<=clients){
		
		showId3.classList.add("fadeInright");

	}

}
window.onscroll=show;