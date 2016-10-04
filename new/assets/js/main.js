window.onload = function() {
	window.onscroll = updateHeader;
	setMenu();
	hideMenu();
	updateHeader();
}
function showMenu(){
	document.getElementById("header").style.display = "block";
}
function hideMenu(){
	document.getElementById("header").style.display = "none";
}
function updateHeader(){
	var nav = document.getElementById("nav");
	var navHeight = nav.getBoundingClientRect().height;
	var doc = document.documentElement;
	var yOffset = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
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

	var navMenu = document.getElementById("nav-menu");
	if((selected == -1) && (yOffset > navHeight)){
		var max = document.getElementById("main").getBoundingClientRect().height - navHeight;
		navMenu.style.opacity = yOffset/max;
		nav.style.bottom = 0;
		nav.style.top = "auto";
	}else{
		navMenu.style.opacity = "";
		nav.style.bottom = "";
		nav.style.top = "";
	}

	nav.className = className;

	var navChildren = document.getElementById("nav-body").children;
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
	var headerList = document.getElementById("header-item-list");
	var nav = document.getElementById("nav-body");
	for (var i = 0; i < navList.length; i++) {
		var id = navList[i].id;
		var div = document.createElement("div");
		div.setAttribute("class", "nav-link box-padding nav-item");
		div.setAttribute("onclick", "showSection('{id}')".replace("{id}", id));
		div.innerHTML = navList[i].getElementsByClassName("section-title")[0].innerHTML;
		nav.appendChild(div);

		div = document.createElement("div");
		div.setAttribute("class", "header-item");
		div.setAttribute("onclick", "showSection('{id}')".replace("{id}", id));
		div.innerHTML = navList[i].getElementsByClassName("section-title")[0].innerHTML;
		headerList.appendChild(div);
	}
}

function showSection(id) {
	hideMenu();
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
	var doc = document.documentElement;
	var xOffset = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	var yOffset = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
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