var GPIO = require('onoff').Gpio;
var LED = new GPIO(4, 'out');

function blinkLED() { 
	if(LED.readySync() === 0){
		LED.writeSync(1);
	} else{
		LED.writeSync(0);
	}
}

function endBlink(){
	clearInterval(blinkInterval);
	LED.writeSync(0);
        LED.unexport;
}

var blinkInterval = setInterval(blinkLED, 250);
setTimeout(endBlink, 5000);
