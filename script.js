alert("hello");
setInterval(clockdiv, 500);
function clockdiv(){
	var time = new Date();
	var hr = time.getHours();
	var min = time.getMinutes();
	var second = time.getSeconds();
	var ampm = "AM";

	if (hr > 12){
		hr = hr-12;
        ampm = "PM";
	}

	if (hr<10){
		hr = "0"+hr;
	}

	if (min<10){
		min = "0"+min;
	}

	if (second<10){
		second = "0"+second;
	}
	document.getElementById("clock").innerHTML= hr+":"+min+":"+second+" "+ampm;
}