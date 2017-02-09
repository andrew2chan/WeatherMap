var kelvin;

window.onload = function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			display(this);
		}
	};
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=toronto&APPID=e06d681eb49284222ec6c140b7cdf370&mode=xml", true);
	xhttp.send();
}

function display(xml) {
	var i, j;
	var txt = "";
	var xmlDoc = xml.responseXML;
	var city = xmlDoc.getElementsByTagName("city")[0].getAttribute("name");
	var country = xmlDoc.getElementsByTagName("country")[0].childNodes[0];
	var temperature = xmlDoc.getElementsByTagName("temperature")[0].getAttribute("value");
	var icon = xmlDoc.getElementsByTagName("weather")[0].getAttribute("icon");
	var weatherValue = xmlDoc.getElementsByTagName("weather")[0].getAttribute("value");
	document.getElementById("city").innerHTML = city;
	document.getElementById("country").innerHTML = country.nodeValue;
	document.getElementById("icon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt=\"weather icon\">";
	document.getElementById("temperature").innerHTML = Math.round(temperature - 273.15);
	//document.getElementById("temperature").innerHTML = Math.round(temperature * (9/5) - 459.67);
	document.getElementById("weatherValue").innerHTML = weatherValue;
	kelvin = temperature;
}

document.getElementById("celsius").addEventListener("click", changeCelsius);
document.getElementById("fahrenheit").addEventListener("click", changeFahrenheit);

function changeCelsius() {
	document.getElementById("temperature").innerHTML = Math.round(kelvin - 273.15);
}

function changeFahrenheit() {
	document.getElementById("temperature").innerHTML = Math.round(kelvin * (9/5) - 459.67);
}