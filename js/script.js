let celcius = document.querySelector("#val-1"),
kelvin = document.querySelector("#val-2"),
farenheit = document.querySelector("#val-3");



// eventlistener onkeyup interactive response for celcius convert
celcius.onkeyup = () => {	
let c = celcius.value * 1;

	if (c > 0 && c !== "") {
		let	f = (c * (9/5)) + 32;
		let	k = c + 273.15; 
			kelvin.value = k;
			farenheit.value = f;
	}
	else {
		kelvin.value = 0;
		farenheit.value = 0;
	}
}


// eventlistener onkeyup interactive response for kelvin convert
kelvin.onkeyup = () => {
	let k = kelvin.value * 1;

	if (k > 0 && k !== "") {
		let	f = (k - 273.15) * 9/5 + 32;
		let	c = k - 273.15; 

			celcius.value = c;
			farenheit.value = f;
	}
	else {
		celcius.value = 0;
		farenheit.value = 0;
	}
}


// eventlistener onkeyup interactive response for farenheit convert
farenheit.onkeyup = () => {
	// convering input to interger
	let f = farenheit.value * 1;

	if (f > 0 && f !== "") {
		let	k = 5/9 * (f + 459.67);
		let	c = ((f - 32) * 5)/9; 

			celcius.value = c.toFixed(2);
			kelvin.value = k.toFixed(2);
	}
	else {
		celcius.value = 0;
		kelvin.value = 0;
	}
}