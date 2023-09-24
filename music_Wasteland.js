
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {


//To do List
//Leaves growing over time
//Set Up
//Italic on 'Wasteland, baby!'
//Make last words fade
//Dont want 'thats it' to read
//Can we load images?
// fade to black

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

let EllipseSize = map (bass,0,100,70,300) // Restricst size, bass in here means not needed- does this affect all cirlces?
  
let blue = color(98, 121, 158)
let green = color (82, 125, 88)
let LerpMap = map (vocal,0,100,0,1)
let middleColor =lerpColor (blue,green,LerpMap) //The greater the vocals the more green!

let Leafx= 8
let Leafy= 10
let LeafOutline = 0.5;
let leaf_colour= color(71, 110, 84);
let leaf_stroke_colour = color(52, 79, 61);

//Leaf 
fill (leaf_colour)
stroke(leaf_stroke_colour)
strokeWeight(LeafOutline)
beginShape ();
curveVertex (Leafx+38,Leafy+190);
curveVertex (Leafx+38,Leafy+190);
curveVertex (Leafx+27,Leafy+170);
curveVertex (Leafx+31,Leafy+150);
curveVertex (Leafx+31,Leafy+150);
endShape (CLOSE);
  
beginShape ();
curveVertex (Leafx+38,Leafy+190);
curveVertex (Leafx+38,Leafy+190);
curveVertex (Leafx+42,Leafy+170);
curveVertex (Leafx+31,Leafy+150);
curveVertex (Leafx+31,Leafy+150);
endShape (CLOSE);

  
//Middle Circle 
fill (middleColor)
strokeWeight (0)
ellipse (width/2, height/6*4,300+vocal,300+vocal)

//Lyrics 
fill(255);
textAlign(CENTER);
text(words, width/2, height/2);

  

  //  let bar_spacing = height / 10;
  //  let bar_height = width / 12;
  //  let bar_pos_x = width / 2;
 

  //  // vocal bar is red
  //  fill(200, 0, 0);
  //  rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
  //  fill(0);
  //  text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
  //  // drum bar is green
  //  fill(0, 200, 0);
  //  rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
  //  fill(0);
  //  text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
  //  // bass bar is blue
  //  fill(50, 50, 240);
  //  rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
  //  fill(0);
  //  text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
  //  // other bar is white
  //  fill(200, 200, 200);
  //  rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
  //  fill(0);
  //  text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
  //  fill(255, 255, 0);
 
  //  // display "words"
  //  textAlign(CENTER);
  //  textSize(vocal);///Louder vocals= biggere text
  //  text(words, width/2, height/3);
}