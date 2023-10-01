
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {


//To do List

// how to console log counter
//how to get background to change over the duration of a song

//How to stop moon from workin unil he starts singng
//how to get grass growing over time

//how to animate the alpha value 
//how to get firefly glow grdient working


// let blueColor = color (91, 124, 130)
// let darkblueColor = color (24, 27, 41)
// strokeWeight (3)

// for (let i = 0; i<500; i++){
//     let gradientAmount = map (i,0,500,0,1)
//     let strokeColor = lerpColour (blueColor, darkblueColor, gradientAmount)
//     stroke (strokeColor)

//     line (0,100+i,width, 100+i, height)
// }

background(49, 74, 87)
ellipseMode (CENTER) //Co-ordinates from centre not corner
textFont('TIMES'); // please use CSS safe fonts
rectMode(CENTER)
textSize(30);

draw_images(vocal, drum, bass, other)

//moon
strokeWeight (0)
fill (255)
ellipse (width/2,height/2,100+vocal,100+vocal)

//Firefly
let firefly_x = 0
let firefly_y = 0
let firefly_w = 0
let firefly_h = 0

//Glow
let glowsize = 30
let fireflyMap = map (drum,0,100,0,glowsize)

let yellow = color(222, 171, 78)
let bright = color (255, 248, 199)
let LerpMap = map (drum,0,200,0,1)
let fireflyfill = lerpColor (yellow,bright,LerpMap)

fill (fireflyfill)
strokeWeight (0)
ellipse (firefly_x+92,firefly_y+96,fireflyMap+4,fireflyMap)

//firefly body
fill (59, 48, 41)
beginShape ();
curveVertex (124,90);
curveVertex (95,92); 
curveVertex (95,99);
curveVertex (120,100);
endShape (CLOSE); 

ellipse (firefly_x+125,firefly_y+93,firefly_w+8,firefly_h+6) // neck
ellipse (firefly_x+131,firefly_y+94,firefly_w+6,firefly_h+7) // head

//firefly body outline
noFill()
strokeWeight (1)
stroke (36, 35, 32)
beginShape ();
curveVertex (124,90);
curveVertex (124,90);
curveVertex (95,92); 
curveVertex (95,99);
curveVertex (120,100);
curveVertex (124,95);
curveVertex (124,95);
endShape (); 

ellipse (firefly_x+125,firefly_y+93,firefly_w+8,firefly_h+6) // neck
ellipse (firefly_x+131,firefly_y+94,firefly_w+6,firefly_h+7) // head

//legs
line (118,100,120,104)
line (114,100,116,104)
line (105,100,103,104)
line (101,100,99,104)
}


let firstRun = true
let Grass = [];

function draw_images(vocal,drum,bass,other){
if (firstRun) {
  Grass.push(loadImage('grass_0.png'));
  Grass.push(loadImage('grass_1.png'));
  Grass.push(loadImage('grass_2.png'));

  firstRun = false
}

var VocalFrame = int (map(other,0,100,0,3));
console.log(VocalFrame);
push();
scale(0.15);
image(Grass[VocalFrame],width/2,height/2)
pop();


}



