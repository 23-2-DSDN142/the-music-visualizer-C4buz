
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let glowLeftImg;
let glowRightImg;
let glowTopImg;

function draw_one_frame(words, vocal, drum, bass, other, counter) {

console.log (song.currentTime())

background(49, 74, 87)
ellipseMode (CENTER)
rectMode(CENTER)
textFont('TIMES'); // please use CSS safe fonts
textSize(30);


// Gradient Background 

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
let moonYStart = height/6*4;
let moonYEnd = height/ 8;

let whenSingingStart = 25.5;

let moonYMap= map(song.currentTime(), whenSingingStart ,song.duration(), moonYStart, moonYEnd);


if (song.currentTime() < whenSingingStart) {
strokeWeight (0)
fill (255)
ellipse (width/2,moonYStart,100+vocal-40,100+vocal-40);
  } else {
strokeWeight (0)
fill (255)
ellipse (width/2,moonYMap,100+vocal,100+vocal);
  }

   
//Firefly
let LEFTx_adjustment =7
let LEFTy_adjustment = 35
let RIGHTx_adjustment =34
let RIGHTy_adjustment = 34

let firefly1_x = 920
let firefly1_y = 3085

let firefly2_x = 9000
let firefly2_y = 4200

let glowsize = 20
let outerglowsize = 80
let fireflyMap = map (drum,0,100,0,glowsize)
let outerfireflyMap = map (drum,0,100,0,outerglowsize)

let yellow = color(204, 152, 80)
let bright = color (252, 239, 189)
let LerpMap = map (drum,0,200,0,1)
let fireflyfill = lerpColor (yellow,bright,LerpMap)

strokeWeight (0)
//Firefly 1
fill (fireflyfill) //light
ellipse (firefly1_x*0.15+LEFTx_adjustment,firefly1_y*0.15+LEFTy_adjustment,fireflyMap+2,fireflyMap+2)

fill (255, 179, 87,50) //Glow
ellipse (firefly1_x*0.15+LEFTx_adjustment,firefly1_y*0.15+LEFTy_adjustment,outerfireflyMap,outerfireflyMap)

//Firefly 2
fill (fireflyfill) //light
ellipse (firefly2_x*0.15+RIGHTx_adjustment,firefly2_y*0.15+RIGHTy_adjustment,fireflyMap+2,fireflyMap+2)

fill (255, 179, 87,50) //Glow
ellipse (firefly2_x*0.15+RIGHTx_adjustment,firefly2_y*0.15+RIGHTy_adjustment,outerfireflyMap,outerfireflyMap)

if (firstRun) {

    glowLeftImg = loadImage ('glowLeft.png');
    glowRightImg = loadImage ('glowRight.png');
    glowTopImg = loadImage ('glowTop.png');
    firstRun = false
    }

push()
scale (0.15)
image(glowLeftImg,firefly1_x,firefly1_y)
pop()    

push()
scale (0.15)
image(glowRightImg,9000,4200)
pop()  

push()
scale (0.15)
image(glowTopImg,7000,4085)
pop()  


// let glowArray = [color(),color(),color(),color()] //create a firefly glow glow, want the alpha value to change

// for(let 1=0, 1<=5,i++){
    
//     fill (glowArray)
//     ellipse (firefly_x+92,firefly_y+96,fireflyMap+4,fireflyMap)
// }



}






