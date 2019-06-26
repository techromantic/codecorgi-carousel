(function () {
	console.log('By Sarim Q.')
	console.log('Dont be looking at me logz.')
	var prefixString ="../images/hero-image-";
	var counter = 0;
	var imgSuffix = '.jpg';

	var carousel = document.getElementById('carousel');

	setInterval(function(){
		var url = "url('" + prefixString+counter+imgSuffix +"'), url('../images/not-found.jpg')";
		console.log(url);
		carousel.style.backgroundImage = url;
		counter++;
	}, 1000);

	carousel.onerror = function () {
		alert('error loading ' + this.src);
		this.src = '../images/not-found.jpg'; // place your error.png image instead
	};

})()