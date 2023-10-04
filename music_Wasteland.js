
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let glowImg;

function draw_one_frame(words, vocal, drum, bass, other, counter) {



console.log (song.currentTime())

background(49, 74, 87)
ellipseMode (CENTER)
rectMode(CENTER)
textFont('TIMES'); // please use CSS safe fonts
textSize(30);


//Gradient Background 

// let skyMap= map(song.currentTime(), 0,song.duration(), 0, 1);

// let duskTop = color (77, 101, 138)
// let duskBottom = color (151, 194, 175)

// let nightTop = color (5, 14, 36)
// let nightBottom = color (41, 48, 64)

// let top = lerpColor (duskTop, nightTop, skyMap)
// let bottom = lerpColor (duskBottom, nightBottom, skyMap)


// for (let i = 0; i<height; i++){

//     let strokeMap= map(i,0,height, 0, 1);
//     let backgroundChange = lerpColor (bottom,top,strokeMap)
   
//     stroke(backgroundChange);
//     strokeWeight(1.5)
//     noFill()
//     line(0, i, width, i)
//     ellipse(width/2, height, width + i, 500 + i*2)

// }



// Vocal moon

if (song.currentTime()> 25.5) {
strokeWeight (0)
fill (255)
ellipse (width/2,height/2,100+vocal,100+vocal);
  } else {
strokeWeight (0)
fill (255)
ellipse (width/2,height/2,100+vocal-30,100+vocal-30);
  }
   
//Firefly

let firefly_x = 0
let firefly_y = 0
let firefly_w = 0
let firefly_h = 0

//Glow

if (firstRun) {
glowImg = loadImage ('glow.png');
firstRun = false
}
push()
image(glowImg,100,100)
pop()


let glowsize = 20
let outerglowsize = 60
let fireflyMap = map (drum,0,100,0,glowsize)
let outerfireflyMap = map (drum,0,100,0,outerglowsize)

let yellow = color(222, 171, 78)
let bright = color (255, 255, 255)
let LerpMap = map (drum,0,200,0,1)
let fireflyfill = lerpColor (yellow,bright,LerpMap)

strokeWeight (0)

fill (255, 179, 87,30)
ellipse (firefly_x+92,firefly_y+96,outerfireflyMap+20,outerfireflyMap+20)


fill (fireflyfill)
ellipse (firefly_x+92,firefly_y+96,fireflyMap+4,fireflyMap+4)


// let glowArray = [color(),color(),color(),color()] //create a firefly glow glow, want the alpha value to change

// for(let 1=0, 1<=5,i++){
    
//     fill (glowArray)
//     ellipse (firefly_x+92,firefly_y+96,fireflyMap+4,fireflyMap)
// }


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






