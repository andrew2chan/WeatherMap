var kelvin;

window.onload = function() {
	var xhttp = new XMLHttpRequest(); //current
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			displayCurrent(this);
			startClock();
		}
	};
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=toronto&APPID=e06d681eb49284222ec6c140b7cdf370&mode=xml", true);
	xhttp.send();
	
	xhttp = new XMLHttpRequest(); //forecast
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			displayForecast(this);
		}
	};
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast/daily?q=toronto&APPID=e06d681eb49284222ec6c140b7cdf370&mode=xml", true);
	xhttp.send();
	//http://api.openweathermap.org/data/2.5/forecast/daily?q=toronto&APPID=e06d681eb49284222ec6c140b7cdf370&mode=xml //daily
}

function displayCurrent(xml) {
	var xmlDoc = xml.responseXML;
	var date = new Date();
	var city = xmlDoc.getElementsByTagName("city")[0].getAttribute("name");
	var country = xmlDoc.getElementsByTagName("country")[0].childNodes[0];
	var temperature = xmlDoc.getElementsByTagName("temperature")[0].getAttribute("value");
	var icon = xmlDoc.getElementsByTagName("weather")[0].getAttribute("icon");
	var weatherValue = xmlDoc.getElementsByTagName("weather")[0].getAttribute("value");
	var windName = xmlDoc.getElementsByTagName("speed")[0].getAttribute("name");
	var windSpeed = xmlDoc.getElementsByTagName("speed")[0].getAttribute("value");
	var humidity = xmlDoc.getElementsByTagName("humidity")[0].getAttribute("value");
	var sunrise = xmlDoc.getElementsByTagName("sun")[0].getAttribute("rise");
	var sunset = xmlDoc.getElementsByTagName("sun")[0].getAttribute("set");
	document.getElementById("day").innerHTML = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
	document.getElementById("city").innerHTML = city;
	document.getElementById("country").innerHTML = country.nodeValue;
	document.getElementById("icon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt=\"weather icon\">";
	document.getElementById("temperature").innerHTML = Math.round(temperature - 273.15);
	//document.getElementById("temperature").innerHTML = Math.round(temperature * (9/5) - 459.67);
	document.getElementById("weatherValue").innerHTML = weatherValue;
	document.getElementById("humidity").innerHTML = humidity + "%";
	document.getElementById("name").innerHTML = windName;
	document.getElementById("speed").innerHTML = Math.round(windSpeed) + " mph";
	document.getElementById("sunrise").innerHTML = sunrise.substring(11);
	document.getElementById("sunset").innerHTML = sunset.substring(11);
	kelvin = [temperature];
}

function displayForecast(xml) {
	var xmlDoc = xml.responseXML; //1
	var day = xmlDoc.getElementsByTagName("time")[1].getAttribute("day");
	var min = xmlDoc.getElementsByTagName("temperature")[1].getAttribute("min");
	var max = xmlDoc.getElementsByTagName("temperature")[1].getAttribute("max");
	var icon = xmlDoc.getElementsByTagName("symbol")[1].getAttribute("var");
	var weatherValue = xmlDoc.getElementsByTagName("symbol")[1].getAttribute("name");
	var windName = xmlDoc.getElementsByTagName("windSpeed")[1].getAttribute("name");
	var windSpeed = xmlDoc.getElementsByTagName("windSpeed")[1].getAttribute("mps");
	var humidity = xmlDoc.getElementsByTagName("humidity")[1].getAttribute("value");
	document.getElementById("forecastDay").innerHTML = day.substring(0,10);;
	document.getElementById("forecastIcon").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt=\"weather icon\">";
	document.getElementById("min").innerHTML = Math.round(min - 273.15);
	document.getElementById("max").innerHTML = Math.round(max - 273.15);
	//document.getElementById("temperature").innerHTML = Math.round(temperature * (9/5) - 459.67);
	document.getElementById("forecastWeatherValue").innerHTML = weatherValue;
	document.getElementById("forecastHumidity").innerHTML = humidity + "%";
	document.getElementById("forecastName").innerHTML = windName;
	document.getElementById("forecastSpeed").innerHTML = Math.round(windSpeed) + " mph";
	kelvin.push(min);
	kelvin.push(max);
	
	day = xmlDoc.getElementsByTagName("time")[2].getAttribute("day"); //2
	min = xmlDoc.getElementsByTagName("temperature")[2].getAttribute("min");
	max = xmlDoc.getElementsByTagName("temperature")[2].getAttribute("max");
	icon = xmlDoc.getElementsByTagName("symbol")[2].getAttribute("var");
	weatherValue = xmlDoc.getElementsByTagName("symbol")[2].getAttribute("name");
	windName = xmlDoc.getElementsByTagName("windSpeed")[2].getAttribute("name");
	windSpeed = xmlDoc.getElementsByTagName("windSpeed")[2].getAttribute("mps");
	humidity = xmlDoc.getElementsByTagName("humidity")[2].getAttribute("value");
	document.getElementById("forecastDay2").innerHTML = day.substring(0,10);;
	document.getElementById("forecastIcon2").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt=\"weather icon\">";
	document.getElementById("min2").innerHTML = Math.round(min - 273.15);
	document.getElementById("max2").innerHTML = Math.round(max - 273.15);
	//document.getElementById("temperature").innerHTML = Math.round(temperature * (9/5) - 459.67);
	document.getElementById("forecastWeatherValue2").innerHTML = weatherValue;
	document.getElementById("forecastHumidity2").innerHTML = humidity + "%";
	document.getElementById("forecastName2").innerHTML = windName;
	document.getElementById("forecastSpeed2").innerHTML = Math.round(windSpeed) + " mph";
	kelvin.push(min);
	kelvin.push(max);
	
	day = xmlDoc.getElementsByTagName("time")[3].getAttribute("day"); //3
	min = xmlDoc.getElementsByTagName("temperature")[3].getAttribute("min");
	max = xmlDoc.getElementsByTagName("temperature")[3].getAttribute("max");
	icon = xmlDoc.getElementsByTagName("symbol")[3].getAttribute("var");
	weatherValue = xmlDoc.getElementsByTagName("symbol")[3].getAttribute("name");
	windName = xmlDoc.getElementsByTagName("windSpeed")[3].getAttribute("name");
	windSpeed = xmlDoc.getElementsByTagName("windSpeed")[3].getAttribute("mps");
	humidity = xmlDoc.getElementsByTagName("humidity")[3].getAttribute("value");
	document.getElementById("forecastDay3").innerHTML = day.substring(0,10);;
	document.getElementById("forecastIcon3").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt=\"weather icon\">";
	document.getElementById("min3").innerHTML = Math.round(min - 273.15);
	document.getElementById("max3").innerHTML = Math.round(max - 273.15);
	//document.getElementById("temperature").innerHTML = Math.round(temperature * (9/5) - 459.67);
	document.getElementById("forecastWeatherValue3").innerHTML = weatherValue;
	document.getElementById("forecastHumidity3").innerHTML = humidity + "%";
	document.getElementById("forecastName3").innerHTML = windName;
	document.getElementById("forecastSpeed3").innerHTML = Math.round(windSpeed) + " mph";
	kelvin.push(min);
	kelvin.push(max);
	
	day = xmlDoc.getElementsByTagName("time")[4].getAttribute("day"); //4
	min = xmlDoc.getElementsByTagName("temperature")[4].getAttribute("min");
	max = xmlDoc.getElementsByTagName("temperature")[4].getAttribute("max");
	icon = xmlDoc.getElementsByTagName("symbol")[4].getAttribute("var");
	weatherValue = xmlDoc.getElementsByTagName("symbol")[4].getAttribute("name");
	windName = xmlDoc.getElementsByTagName("windSpeed")[4].getAttribute("name");
	windSpeed = xmlDoc.getElementsByTagName("windSpeed")[4].getAttribute("mps");
	humidity = xmlDoc.getElementsByTagName("humidity")[4].getAttribute("value");
	document.getElementById("forecastDay4").innerHTML = day.substring(0,10);;
	document.getElementById("forecastIcon4").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt=\"weather icon\">";
	document.getElementById("min4").innerHTML = Math.round(min - 273.15);
	document.getElementById("max4").innerHTML = Math.round(max - 273.15);
	//document.getElementById("temperature").innerHTML = Math.round(temperature * (9/5) - 459.67);
	document.getElementById("forecastWeatherValue4").innerHTML = weatherValue;
	document.getElementById("forecastHumidity4").innerHTML = humidity + "%";
	document.getElementById("forecastName4").innerHTML = windName;
	document.getElementById("forecastSpeed4").innerHTML = Math.round(windSpeed) + " mph";
	kelvin.push(min);
	kelvin.push(max);
	
	day = xmlDoc.getElementsByTagName("time")[5].getAttribute("day"); //5
	min = xmlDoc.getElementsByTagName("temperature")[5].getAttribute("min");
	max = xmlDoc.getElementsByTagName("temperature")[5].getAttribute("max");
	icon = xmlDoc.getElementsByTagName("symbol")[5].getAttribute("var");
	weatherValue = xmlDoc.getElementsByTagName("symbol")[5].getAttribute("name");
	windName = xmlDoc.getElementsByTagName("windSpeed")[5].getAttribute("name");
	windSpeed = xmlDoc.getElementsByTagName("windSpeed")[5].getAttribute("mps");
	humidity = xmlDoc.getElementsByTagName("humidity")[5].getAttribute("value");
	document.getElementById("forecastDay5").innerHTML = day.substring(0,10);;
	document.getElementById("forecastIcon5").innerHTML = "<img src=\"http://openweathermap.org/img/w/" + icon + ".png\" alt=\"weather icon\">";
	document.getElementById("min5").innerHTML = Math.round(min - 273.15);
	document.getElementById("max5").innerHTML = Math.round(max - 273.15);
	//document.getElementById("temperature").innerHTML = Math.round(temperature * (9/5) - 459.67);
	document.getElementById("forecastWeatherValue5").innerHTML = weatherValue;
	document.getElementById("forecastHumidity5").innerHTML = humidity + "%";
	document.getElementById("forecastName5").innerHTML = windName;
	document.getElementById("forecastSpeed5").innerHTML = Math.round(windSpeed) + " mph";
	kelvin.push(min);
	kelvin.push(max);
}

document.getElementById("celsius").addEventListener("click", changeCelsius);
document.getElementById("fahrenheit").addEventListener("click", changeFahrenheit);
document.getElementById("searchIcon").addEventListener("click", changeLocation);

function changeCelsius() {
	document.getElementById("temperature").innerHTML = Math.round(kelvin[0] - 273.15);
	document.getElementById("min").innerHTML = Math.round(kelvin[1] - 273.15); //1
	document.getElementById("max").innerHTML = Math.round(kelvin[2] - 273.15);
	document.getElementById("min2").innerHTML = Math.round(kelvin[3] - 273.15); //2
	document.getElementById("max2").innerHTML = Math.round(kelvin[4] - 273.15);
	document.getElementById("min3").innerHTML = Math.round(kelvin[5] - 273.15); //3
	document.getElementById("max3").innerHTML = Math.round(kelvin[6] - 273.15);
	document.getElementById("min4").innerHTML = Math.round(kelvin[7] - 273.15); //4
	document.getElementById("max4").innerHTML = Math.round(kelvin[8] - 273.15);
	document.getElementById("min5").innerHTML = Math.round(kelvin[9] - 273.15); //5
	document.getElementById("max5").innerHTML = Math.round(kelvin[10] - 273.15);
}

function changeFahrenheit() {
	document.getElementById("temperature").innerHTML = Math.round(kelvin[0] * (9/5) - 459.67);
	document.getElementById("min").innerHTML = Math.round(kelvin[1] * (9/5) - 459.67); //1
	document.getElementById("max").innerHTML = Math.round(kelvin[2] * (9/5) - 459.67);
	document.getElementById("min2").innerHTML = Math.round(kelvin[3] * (9/5) - 459.67); //2
	document.getElementById("max2").innerHTML = Math.round(kelvin[4] * (9/5) - 459.67);
	document.getElementById("min3").innerHTML = Math.round(kelvin[5] * (9/5) - 459.67); //3
	document.getElementById("max3").innerHTML = Math.round(kelvin[6] * (9/5) - 459.67);
	document.getElementById("min4").innerHTML = Math.round(kelvin[7] * (9/5) - 459.67); //4
	document.getElementById("max4").innerHTML = Math.round(kelvin[8] * (9/5) - 459.67);
	document.getElementById("min5").innerHTML = Math.round(kelvin[9] * (9/5) - 459.67); //5
	document.getElementById("max5").innerHTML = Math.round(kelvin[10] * (9/5) - 459.67);
}

function startClock() {
	var date = new Date();
	var time;
	
	time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	
	document.getElementById("time").innerHTML = time;
	
	setTimeout(startClock, 1000);
}

function changeLocation() {
	var xhttp = new XMLHttpRequest(); //current
	var newLocation = document.getElementById("search").value;
	var i;
	for(i=0;i<kelvin.length; i++)
		kelvin.pop();
	var newLocationCurrent = "http://api.openweathermap.org/data/2.5/weather?q=" + newLocation + "&APPID=e06d681eb49284222ec6c140b7cdf370&mode=xml";
	var newLocationForecast = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + newLocation + "&APPID=e06d681eb49284222ec6c140b7cdf370&mode=xml";
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			displayCurrent(this);
		}
	};
	xhttp.open("GET", newLocationCurrent, true);
	xhttp.send();
	
	xhttp = new XMLHttpRequest(); //forecast
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			displayForecast(this);
		}
	};
	xhttp.open("GET", newLocationForecast, true);
	xhttp.send();
}