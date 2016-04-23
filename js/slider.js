var imagecount = 1;
	var total = 3;

	function slide(x) {
		var Image = document.getElementById('omg');
		imagecount = imagecount + x;
		if (imagecount > total) { imagecount= 1;};
		if (imagecount < 1) { imagecount= total;};
		Image.src = "images/pic" + imagecount + ".jpg";
	}
window.setInterval (function slideA() {
		var Image = document.getElementById('omg');
		imagecount = imagecount + 1;
		if (imagecount > total) { imagecount= 1;};
		if (imagecount < 1) { imagecount= total;};
		Image.src = "images/pic" + imagecount + ".jpg";
},5000);