window.onload = function() {
	document.body.onscroll = updateHeader;
	setMenu();
}

function updateHeader(){
	var nav = document.getElementById("nav");
	var navHeight = nav.getBoundingClientRect().height;
	var className = "nav-absolute";
	var selected = -1;

	var navList = document.getElementById("data-section").getElementsByTagName("section");
	for (var i = 0; i < navList.length; i++) {
		var dataTop = navList[i].getBoundingClientRect().top;
		if(dataTop <= navHeight + 1){
			className = "nav-fixed";
			selected = i;
		}
	}

	nav.className = className;

	var navChildren = document.getElementById("nav").getElementsByClassName("nav-body")[0].children;
	for(var i=0; i<navChildren.length; i++){
		if(i == selected){
			navChildren[i].classList.add("nav-selected");
		}else{
			navChildren[i].classList.remove("nav-selected");
		}
	}

}

function setMenu() {
	var navList = document.getElementById("data-section").getElementsByTagName("section");
	var nav = document.getElementById("nav").getElementsByClassName("nav-body")[0];
	for (var i = 0; i < navList.length; i++) {
		var id = navList[i].id;
		var div = document.createElement("div");
		div.setAttribute("class", "nav-link box-padding");
		div.setAttribute("onclick", "showSection('{id}')".replace("{id}", id));
		div.innerHTML = navList[i].getElementsByClassName("section-title")[0].innerHTML;
		nav.appendChild(div);
	}
}

function showSection(id) {
	var sid = document.getElementById(id);
	var top = sid.getBoundingClientRect().top;
	var left = sid.getBoundingClientRect().left;
	var nav = document.getElementById("nav");
	var navHeight = nav.getBoundingClientRect().height;
	animateScroll(left, top - navHeight, 200);
}

function animateScroll(x, y, duration) {
	var steps = Math.floor(duration / 10);
	var stepSize = 1 / steps;
	var xOffset = window.scrollX;
	var yOffset = window.scrollY;
	for (var i = 0; i < steps; i++) {
		animateScrollDelay((x * stepSize * i) + xOffset, (y * stepSize * i) + yOffset, duration * stepSize * i);
	}
	animateScrollDelay(x + xOffset, y + yOffset, duration);
}

function animateScrollDelay(x, y, duration) {
	setTimeout(function() {
		window.scrollTo(x, y);
	}, duration);
}