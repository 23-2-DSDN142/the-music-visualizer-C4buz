
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {


//To do List
//Leaves growing over time
//Set Up
//Can we load images?


//Loading image sequences and assets is in NUKU
//animate the alpha value 
//if statement+ counter + assets
//four loops
//find a counter thing that reads as you play to know where to make changes.

background(49, 74, 87)
ellipseMode (CENTER) //Co-ordinates from centre not corner
textFont('TIMES'); // please use CSS safe fonts
rectMode(CENTER)
textSize(30);

//how to limit firefly size?
//Want fireflys to only turn on once he starts singing


//Firefly
let firefly_x = 0
let firefly_y = 0
let firefly_w = 0
let firefly_h = 0

//Glow
let glowsize = 15
let fireflysize = map (bass,0,100,0,glowsize)

let yellow = color(222, 171, 78)
let bright = color (255, 248, 199)
let LerpMap = map (bass,0,200,0,1)
let fireflyfill = lerpColor (yellow,bright,LerpMap)

fill (fireflyfill)
strokeWeight (0)
ellipse (firefly_x+92,firefly_y+96,fireflysize+4,fireflysize)

//firefly body
fill (69, 55, 48)
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





  

 
}