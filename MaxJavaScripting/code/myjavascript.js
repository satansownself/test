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





