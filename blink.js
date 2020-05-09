var Raspi = require('raspi-io').RaspiIO;
var j5 = require('johnny-five');

var board = new j5.Board({
	io: new Raspi()
});

board.on('ready', function(){
	console.log('board ready');
	var LED = new j5.Led('P1-11');
	var button = new j5.Button({pin: 'P1-7', inverted: true});
	button.on('down', function(){
		console.log('down');
		LED.on();
	});
	button.on('up', function(){
		console.log('up');
		LED.off();
	})
});
