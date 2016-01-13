$(document).ready(function(){
	console.log("data load");

	getLocation();
var x = document.getElementById("demo");
function error() {
	var y =  document.getElementById("demo");
	var z =  document.getElementById("demo2");
    y.innerHTML = "Unable to retrieve your location";
    z.innerHTML = "Unable to retrieve your location";
	var a = y.innerHTML;
	var b = z.innerHTML;
	console.log(a);
	console.log(b);
	$('#imgLoader').hide();
	$('#imgLoader2').hide();
  }
  
  
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition,error);
			console.log("get location");
    } else { 
        x.innerHTML = "please check your GPS.";
		console.log("error in getting location");
    }
}




function showPosition(position) {
	var lat =position.coords.latitude ;
	var lon =position.coords.longitude ;
	console.log(lat);
	console.log(lon);
	console.log("no coords");
		if (lat == "" || lat == null ){
		var a = document.getElementById('demo');
		a.innerHTML = "check gps";
		var b = a.innerHTML;
		console.log(b);
		
	}
$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ lon +"&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
var id = result.weather[0].id;
var description = result.weather[0].description;
var icon = result.weather[0].icon;
var temp = Math.round(result.main.temp);
var pressure = result.main.pressure;
var humidity = result.main.humidity;
var wind = result.wind.speed;
var sunrise = result.sys.sunrise;
var sunset = result.sys.sunset;
var temp_min = result.main.temp_min;
var temp_max = result.main.temp_max;
var name = 	result.name;
var lon = 	result.coord.lon;

var dateSunrise = new Date(sunrise*1000);
var hoursSunrise = dateSunrise.getHours();
var minutesSunrise = "0" + dateSunrise.getMinutes();
var formattedTimeSunrise = hoursSunrise + ':' + minutesSunrise.substr(-2);

var dateSunset = new Date(sunset*1000);
var hoursSunset = dateSunset.getHours();
var minutesSunset = "0" + dateSunset.getMinutes();
var formattedTimeSunset = hoursSunset + ':' + minutesSunset.substr(-2);

console.log("status of json");

		setTimeout(function(){
		$('#imgLoader').fadeOut();
		$('#imgLoader2').fadeOut();
		document.getElementById('show').innerHTML = "<div class='card-media'><img width='100%' src='http://openweathermap.org/img/w/"+ icon  + ".png'></div><div class='card-title'><h3 class='card-primary-title'>"+temp + "&#176; <br>"+ name + "</h3>	<h5 class='card-subtitle'>"+description+"</h5><hr></div>"
		document.getElementById('showHome').innerHTML = "<div class='card-media'><img width='100%' src='http://openweathermap.org/img/w/"+ icon  + ".png'></div><div class='card-title'><h3 class='card-primary-title'>"+temp + "&#176; <br>"+ name + "</h3>	<h5 class='card-subtitle'>"+description+"</h5><hr></div>"
		//document.getElementById('demo').innerHTML = "Please check your gps";
	console.log("timeout");
		}, 3000);		


});

$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat="+ lat +"&lon="+ lon +"&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showDaily").append("<div class='text-center col-md-2 col-xs-2'><div class='classWithPad'>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			$("#showDailyHome").append("<div class='text-center col-md-2 col-xs-2'><div class='classWithPad'>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			
		}


});
}

//TOURIST //

var vigan = "http://api.openweathermap.org/data/2.5/weather?lat=17.570947&lon=120.385587&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(vigan, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showVigan').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showVigan2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showViganIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=17.570947&lon=120.385587&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i <6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showViganForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	var baguio = "http://api.openweathermap.org/data/2.5/weather?lat=16.400625&lon=120.593924&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(baguio, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showBaguio').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBaguio2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBaguioIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=16.400625&lon=120.593924&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showBaguioForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	
var banaue = "http://api.openweathermap.org/data/2.5/weather?lat=16.924196&lon=121.055957&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(banaue, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showBanaue').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBanaue2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBanaueIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=16.924196&lon=121.055957&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showBanaueForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

var anilao = "http://api.openweathermap.org/data/2.5/weather?lat=13.760094&lon=120.927625&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(anilao, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showAlinao').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Anilao</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showAlinao2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Anilao</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showAlinaoIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=13.760094&lon=120.927625&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showAlinaoForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	var puertogalera = "http://api.openweathermap.org/data/2.5/weather?lat=13.467163&lon=120.957982&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(puertogalera, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showPuertoGalera').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Puerto Galera</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showPuertoGalera2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Puerto Galera</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showPuertoGaleraIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=13.467163&lon=120.957982&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showPuertoGaleraForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	var taal = "http://api.openweathermap.org/data/2.5/weather?lat=14.012419&lon=120.997905&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(taal, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showTaal').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Taal</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showTaal2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Taal</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showTaalIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=14.012419&lon=120.997905&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showTaalForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	var naga = "http://api.openweathermap.org/data/2.5/weather?lat=13.623620&lon=123.189093&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(naga, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showNaga').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showNaga2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showNagaIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=13.623620&lon=123.189093&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showNagaForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	//11.2056626,119.1259039
	var elnido = "http://api.openweathermap.org/data/2.5/weather?lat=11.2056626&lon=119.1259039&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(elnido, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showElNido').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showElNido2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showElNidoIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=11.207010&lon=119.464418&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showElNidoForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	//11.9693649,121.8922093
	var boracay = "http://api.openweathermap.org/data/2.5/weather?lat=11.9693649&lon=121.8922093&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(boracay, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showBoracay').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Boracay</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBoracay2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Boracay</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBoracayIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=11.9693649&lon=121.8922093&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showBoracayForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	//9.907642,124.092293
	var bohol = "http://api.openweathermap.org/data/2.5/weather?lat=9.907642&lon=124.092293&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(bohol, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showBohol').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Bohol</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBohol2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Bohol</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBoholIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=9.907642&lon=124.092293&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){

		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showBoholForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});
	
	//10.2935466,123.8997447
	var cebu = "http://api.openweathermap.org/data/2.5/weather?lat=10.2935466&lon=123.8997447&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(cebu, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showCebu').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Cebu</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showCebu2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Cebu</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showCebuIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=10.2935466&lon=123.8997447&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showCebuForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	//9.2005972,124.6505463
	var camiguin = "http://api.openweathermap.org/data/2.5/weather?lat=9.2005972&lon=124.6505463&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(camiguin, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showCamiguin').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Camiguin</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showCamiguin2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Camiguin</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showCamiguinIcon').innerHTML = "<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=9.2005972&lon=124.6505463&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showCamiguinForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});

	//7.2541823,125.1708687
	var davao = "http://api.openweathermap.org/data/2.5/weather?lat=7.2541823&lon=125.1708687&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(davao, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showDavao').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Davao</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showDavao2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Davao</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showDavaoIcon').innerHTML = "<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	$.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?lat=7.2541823&lon=125.1708687&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric", function(result){
		for (var i = 1; i < 6; i++) {
			var dt = result.list[i].dt;
			var time = new Date(dt*1000);
			var date = new Date(time);
			var daily = date.customFormat( "#DDD#");
			var min = Math.round(result.list[i].temp.min);
			var max = Math.round(result.list[i].temp.max);
			var icon = result.list[i].weather[0].icon;
			$("#showDavaoForecast").append("<div class='text-center col-md-2 col-xs-2'><div class=''>"+daily+"<br><img width='100%' class='wIcon' src='http://openweathermap.org/img/w/"+ icon  + ".png'><strong>"+max + "&deg; </strong><br>" +min+"&deg;<br><br></div></div>")   
			 
		}


});



//ASIAN CITIES //

	var tokyo = "http://api.openweathermap.org/data/2.5/weather?lat=35.754258&lon=139.736827&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(tokyo, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showTokyo').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Tokyo</h5><h5 class=card-subtitle-text>Japan</h5>";
		document.getElementById('showTokyo2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Tokyo</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showTokyoIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	

	var seoul = "http://api.openweathermap.org/data/2.5/weather?lat=37.556308&lon=126.990911&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(seoul, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showSeoul').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Seoul</h5><h5 class=card-subtitle-text>Korea</h5>";
		document.getElementById('showSeoul2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Seoul</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showSeoulIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	var beijing = "http://api.openweathermap.org/data/2.5/weather?lat=39.905897&lon=116.409496&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(beijing, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showBeijing').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>"+name+"</h5><h5 class=card-subtitle-text>China</h5>";
		document.getElementById('showBeijing2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Beijing</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBeijingIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	var taipei = "http://api.openweathermap.org/data/2.5/weather?lat=25.040557&lon=121.563922&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(taipei, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showTaipei').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Taipei</h5><h5 class=card-subtitle-text>Taiwan</h5>";
		document.getElementById('showTaipei2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Taipei</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showTaipeiIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//22.3580723,113.8408169
	var hongkong = "http://api.openweathermap.org/data/2.5/weather?lat=22.3580723&lon=113.8408169&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(hongkong, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showHongkong').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Hongkong</h5><h5 class=card-subtitle-text>China</h5>";
		document.getElementById('showHongkong2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Hongkong</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showHongkongIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//13.7251097,100.3529042
	var bangkok = "http://api.openweathermap.org/data/2.5/weather?lat=13.7251097&lon=100.3529042&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(bangkok, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showBangkok').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Bangkok</h5><h5 class=card-subtitle-text>Thailand</h5>";
		document.getElementById('showBangkok2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Bangkok</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBangkokIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//13.7251097,100.3529042
	var bangkok = "http://api.openweathermap.org/data/2.5/weather?lat=25.040557&lon=121.563922&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(bangkok, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showTaipei').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Taipei</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showTaipei2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Taipei</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showTaipeiIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//3.156218,101.712603
	var kualalumpur = "http://api.openweathermap.org/data/2.5/weather?lat=3.156218&lon=101.712603&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(kualalumpur, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showKualaLumpur').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Kuala Lumpur</h5><h5 class=card-subtitle-text>Malaysia</h5>";
		document.getElementById('showKualaLumpur2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Kuala Lumpur</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showKualaLumpurIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//1.3150701,103.7069295
	var singapore = "http://api.openweathermap.org/data/2.5/weather?lat=1.3150701&lon=103.7069295&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(singapore, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showSingapore').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Singapore</h5><h5 class=card-subtitle-text>Singapore</h5>";
		document.getElementById('showSingapore2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Singapore</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showSingaporeIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//-6.0486964,105.7452916
	var jakarta = "http://api.openweathermap.org/data/2.5/weather?lat=-6.0486964&lon=105.7452916&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(jakarta, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showJakarta').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Jakarta</h5><h5 class=card-subtitle-text>Indonesia</h5>";
		document.getElementById('showJakarta2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Jakarta</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showJakartaIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//21.0227732,105.801944
	var hanoi = "http://api.openweathermap.org/data/2.5/weather?lat=21.0227732&lon=105.801944&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(hanoi, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showHanoi').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Hanoi</h5><h5 class=card-subtitle-text>Vietnam</h5>";
		document.getElementById('showHanoi2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Hanoi</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showHanoiIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//11.5796669,104.7500973
	var phnompenh = "http://api.openweathermap.org/data/2.5/weather?lat=11.5796669&lon=104.7500973&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(phnompenh, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showPhnompenh').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Phnom Penh</h5><h5 class=card-subtitle-text>Cambodia</h5>";
		document.getElementById('showPhnompenh2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Phnom Penh</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showPhnompenhIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//16.9041018,96.0294206
	var rangoon = "http://api.openweathermap.org/data/2.5/weather?lat=16.9041018&lon=96.0294206&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(rangoon, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showRangoon').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Rangoon</h5><h5 class=card-subtitle-text>Myanmar</h5>";
		document.getElementById('showRangoon2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Rangoon</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showRangoonIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//10.769,106.4141593
	var hochiminh = "http://api.openweathermap.org/data/2.5/weather?lat=10.769&lon=106.4141593&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(hochiminh, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showHochiminh').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Ho Chi Minh</h5><h5 class=card-subtitle-text>Vietnam</h5>";
		document.getElementById('showHochiminh2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Ho Chi Minh</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showHochiminhIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
		
	//4.5254026,114.1590944
	var brunei = "http://api.openweathermap.org/data/2.5/weather?lat=4.5254026&lon=114.1590944&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(brunei, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showBrunei').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Brunei</h5><h5 class=card-subtitle-text>Brunei</h5>";
		document.getElementById('showBrunei2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Brunei</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showBruneiIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	
	//-33.7945147,150.3619536
	var sydney = "http://api.openweathermap.org/data/2.5/weather?lat=-33.7945147&lon=150.3619536&APPID=f409ef9bff7e0ac91c9f4074b3945a26&units=metric"
	$.getJSON(sydney, function(result){
		var icon = result.weather[0].icon;
		var temp = Math.round(result.main.temp);
		var temp_min = result.main.temp_min;
		var temp_max = result.main.temp_max;
		var name = result.name;
		var description = result.weather[0].description;
		document.getElementById('showSydney').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Sydney</h5><h5 class=card-subtitle-text>Australia</h5>";
		document.getElementById('showSydney2').innerHTML = "<h3 class=card-primary-title>"+temp + " &deg;</h3><h5 class=card-subtitle>Sydney</h5><h5 class=card-subtitle-text>"+description+"</h5>";
		document.getElementById('showSydneyIcon').innerHTML = "	<img src=http://openweathermap.org/img/w/"+icon+".png>";
	});	
	

	







































//DATE FORMAT //
Date.prototype.customFormat = function(formatString){
  var YYYY,YY,MMMM,MMM,MM,M,DDDD,DDD,DD,D,hhhh,hhh,hh,h,mm,m,ss,s,ampm,AMPM,dMod,th;
  YY = ((YYYY=this.getFullYear())+"").slice(-2);
  MM = (M=this.getMonth()+1)<10?('0'+M):M;
  MMM = (MMMM=["January","February","March","April","May","June","July","August","September","October","November","December"][M-1]).substring(0,3);
  DD = (D=this.getDate())<10?('0'+D):D;
  DDD = (DDDD=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][this.getDay()]).substring(0,3);
  th=(D>=10&&D<=20)?'th':((dMod=D%10)==1)?'st':(dMod==2)?'nd':(dMod==3)?'rd':'th';
  formatString = formatString.replace("#YYYY#",YYYY).replace("#YY#",YY).replace("#MMMM#",MMMM).replace("#MMM#",MMM).replace("#MM#",MM).replace("#M#",M).replace("#DDDD#",DDDD).replace("#DDD#",DDD).replace("#DD#",DD).replace("#D#",D).replace("#th#",th);
  h=(hhh=this.getHours());
  if (h==0) h=24;
  if (h>12) h-=12;
  hh = h<10?('0'+h):h;
  hhhh = h<10?('0'+hhh):hhh;
  AMPM=(ampm=hhh<12?'am':'pm').toUpperCase();
  mm=(m=this.getMinutes())<10?('0'+m):m;
  ss=(s=this.getSeconds())<10?('0'+s):s;
  return formatString.replace("#hhhh#",hhhh).replace("#hhh#",hhh).replace("#hh#",hh).replace("#h#",h).replace("#mm#",mm).replace("#m#",m).replace("#ss#",ss).replace("#s#",s).replace("#ampm#",ampm).replace("#AMPM#",AMPM);
};		
});