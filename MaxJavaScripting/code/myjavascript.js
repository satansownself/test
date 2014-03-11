inlets = 2;

outlets = 2;



function bang() {
	post (math.random());
	post ();
};


/*function msg_int(i){
	post(i);
	post();
	outlet(0, i);
};
*/

/*if inlet == 1 {
	msg_int(i){
		var in1 = i;
		return in1;
	};
};

if inlet == 0 {
	msg_int (i){
		var in0 = i;
		outlet(0, in0 + in1);
		return in0
	}
}
		
*/

/*function msg_int(i) {
	if inlet === 0 {
		outlet(0, i)
	}

}*/


function colour() {
	var r = Math.random();
	var g = Math.random();
	var b = Math.random();
	var r2 = Math.random();
	var g2 = Math.random();
	var b2 = Math.random();
	outlet(1, "clear");
	outlet(1, "setcell", 0, 0, "val", 1, r, g, b);
	outlet(1, "setcell", 1, 1, "val", 1, r, g, b);
	outlet(1, "setcell", 0, 1, "val", 1, r2, g2, b2);
	outlet(1, "setcell", 1, 0, "val", 1, r2, g2, b2);
	outlet(1, "bang");

}

//create random 8x8 grid from output 1
function chessRand() {
	var r = Math.random();
	var g = Math.random();
	var b = Math.random();
	var r2 = Math.random();
	var g2 = Math.random();
	var b2 = Math.random();
	
	for (var x = 0; x < 8; x++) {
		for (var y=0; y<8; y++) {
			if ((x + y)%2 == 1) {
				outlet(1, "setcell", x, y, "val", 1, r, g, b);
			}
			else{outlet(1, "setcell", x, y, "val", 1, r2, g2, b2);}
		}
	}
	outlet(1, "bang");
}



/*
function highlight(frame,x,y) {
//	return (x > y) == (x+y<64);
	return (frame > (x^y))
}

function patten(frame) {
	var r = Math.random();
	var g = Math.random();
	var b = Math.random();
	var r2 = Math.random();
	var g2 = Math.random();
	var b2 = Math.random();
	for (var x = 0; x < 64; x++) {
		for (var y=0; y<64; y++) {
			if (highlight(frame, x, y)) {
				outlet(1, "setcell", x, y, "val", 1, r, g, b);
			}
			else{outlet(1, "setcell", x, y, "val", 1, r2, g2, b2);}
		}
	}
	outlet(1, "bang");
}
*/



function pickColour(frame,x,y) {
	if (frame > (x^y)){return (1); }
	if (frame > (x|y)) {return (2);}
	else {return (0);}
}
function highlight(frame,x,y) {
//	return (x > y) == (x+y<64);
	return (frame > (x^y))
}

function patten(frame) {
	var c1 = [Math.random(), Math.random(), Math.random()];
	var c2 = [Math.random(), Math.random(), Math.random()];
	var allColours = [c1, c2];
	var colour;
	for (var x = 0; x < 64; x++) {
		for (var y=0; y<64; y++) {
			colour = allColours[pickColour(frame, x, y)];
			outlet(1, "setcell", x, y, "val", 1, colour[0], colour[1], colour[2]);
			
		}
	}
	outlet(1, "bang");
}