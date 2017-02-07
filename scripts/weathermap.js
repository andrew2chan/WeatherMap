window.onload = function() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			display(this);
		}
	};
	xhttp.open("GET", "http://api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=e06d681eb49284222ec6c140b7cdf370&mode=xml", true);
	xhttp.send();
}

function display(xml) {
	var i, j;
	var txt = "";
	var xmlDoc = xml.responseXML;
	/*var x = xmlDoc.documentElement.childNodes;
	for (i= 0; i< x.length; i++) { 
		if (x[i].nodeType== 1) {
			txt += x[i].nodeName+ "<br>";
			var y = x[i].childNodes;
			for(j = 0; j < y.length; j++) {
				txt += x[i].childNodes[j].nodeValue + "<br>";
			}
		}
	}
	document.write(txt); */
	document.write(xmlDoc.getElementsByTagName("name")[0].childNodes[0].nodeValue);
}
