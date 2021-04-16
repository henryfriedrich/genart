var colPal = [
	[38,70,83],
	[42,157,143],
	[233,196,106],
	[244,162,97],
	[231,111,81]
	];
  
function setup() {
	createCanvas(600,600);
	background(238);
	var fibSeq = [55,89,144,233,377];
	let x = window.width/2;
	let y = window.height/2;
	noStroke(0);

	for (i=0; i<fibSeq.length;i++){
		d = fibSeq.length-1-i;
		fill(colPal[d][0],colPal[d][1],colPal[d][2]);
		circle(x,y,fibSeq[d]);
		y = y + fibSeq[d]/2-fibSeq[d-1]/2;
	};
}

function mouseClicked() {
	var current = Date.now();
	saveCanvas('canvas'+current,'png');
}