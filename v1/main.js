window.onload = function() {
	document.body.onscroll = updateHeader;
	setMenu();
	hideMenu();
	document.getElementById("header").onclick = showMenu;
	document.getElementById("logo-img").onclick = showMenu;
}

function setMenu() {
	var headerList = document.getElementById("content").getElementsByClassName("title");
	var menu = document.getElementById("menu");
	var menuData = document.getElementById("menu-data");
	document.getElementById("menu-title").onclick = hideMenu;

	for (var i = 0; i < headerList.length; i++) {
		var elem = document.createElement("div");
		elem.setAttribute("data-id", "#" + headerList[i].parentNode.id);
		elem.onclick = function() {
			hideMenu();
			window.location.href = this.getAttribute("data-id");
		};
		elem.innerHTML = headerList[i].outerHTML;
		menuData.appendChild(elem);
		headerList[i].onclick = showMenu;
	}
	menu.style.height = "0";
	menu.style.overflow = "hidden";
}

function showMenu() {
	var menu = document.getElementById("menu");
	var menuData = document.getElementById("menu-data");
	menu.style.height = "";
	menu.style.overflow = "visible";
	menu.style.opacity = "1";
	var content = document.getElementById("content");
	var contentBody = document.getElementById("content-body");
	content.style.height = "0";
	content.style.overflow = "hidden";
	content.style.opacity = "0";
	document.getElementById("header").style.display = "none";
	window.scrollTo(0, 0);
}

function hideMenu() {
	var menu = document.getElementById("menu");
	var menuData = document.getElementById("menu-data");
	menu.style.height = "0";
	menu.style.overflow = "hidden";
	menu.style.opacity = "0";
	var content = document.getElementById("content");
	var contentBody = document.getElementById("content-body");
	content.style.height = "";
	content.style.overflow = "visible";
	content.style.opacity = "1";
	document.getElementById("header").style.display = "";
}

function updateHeader() {
	var doc = document.documentElement;
	var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	var currentIndex = -1;
	var headerList = document.getElementById("content").getElementsByClassName("title");
	for (var i = 0; i < headerList.length; i++) {
		if (headerList[i].getBoundingClientRect().top < 0) {
			currentIndex = i;
		} else {
			break;
		}
	}
	var h = document.getElementById("header");
	var margin = 0;
	var html = "";
	if (currentIndex != -1) {
		html = headerList[currentIndex].outerHTML;
		if (currentIndex + 1 < headerList.length) {
			var offset = headerList[currentIndex + 1].getBoundingClientRect().top - headerList[currentIndex].clientHeight;
			if (offset < 0) {
				margin = offset;
			}
		}
	}
	h.innerHTML = html;
	h.style.marginTop = margin;
}