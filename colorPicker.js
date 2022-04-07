function startup() {
	colorWell = document.querySelector("#colorPicker");
	colorWell.value = "#"+defaultColor.slice(2, (defaultColor.length));
	colorWell.addEventListener("input", updateFirst, false);
	colorWell.select();
}


function updateFirst(event) {
	var p = document.querySelector("colorPicker");
	defaultColor = "0x"+(event.target.value.slice(1, (event.target.value).length));
}

var colorWell;
var defaultColor = "0x0000ff";

window.addEventListener("load", startup, false);


