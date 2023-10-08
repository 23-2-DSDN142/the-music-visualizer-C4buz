
// vocal, drum, bass, and other are volumes ranging from 0 to 100
let firstRun = true
let glowLeftImg;
let glowRightImg;
let glowTopImg;
let gardenbaseImg;
let fern4Img;
let fern3Img;
let fern1Img;
let fern2Img;
let moonImg;
let mushroomsImg; 

function draw_one_frame(words, vocal, drum, bass, other, counter) {

console.log (song.currentTime())

background(49, 74, 87)
ellipseMode (CENTER)
rectMode(CENTER)
textFont('TIMES'); // please use CSS safe fonts
textSize(30);

if (firstRun) {
  glowLeftImg = loadImage ('glowLeft.png');
  glowRightImg = loadImage ('glowRight.png');
  glowTopImg = loadImage ('glowTop.png');
  gardenbaseImg = loadImage ('gardenbase.png')
  fern4Img = loadImage ('fern4.png')
  grassImg = loadImage ('grass.png')
  fern3Img = loadImage ('fern3.png')
  fern1Img = loadImage ('fern1.png')
  fern2Img = loadImage ('fern2.png')
  moonImg = loadImage ('moon.png')
  mushroomImg = loadImage ('mushroom.png')
  
  firstRun = false
  }


// Gradient Background 

// let skyMap= map(song.currentTime(), 0,song.duration(), 0, 1);

// let duskTop = color (31, 62, 89)
// let duskBottom = color (81, 140, 138)

// let nightTop = color (22, 26, 33)
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
let moonYStart = 700;
let moonX = width/2
let moonYEnd = 100;

let whenSingingStart = 25.5;

let moonYMap= map(song.currentTime(), whenSingingStart ,song.duration(), moonYStart, moonYEnd);
let moonScale= map (vocal,0,100,0,1.5)

if (song.currentTime() < whenSingingStart) {
  strokeWeight (0)
  push()
  image(moonImg,moonX,moonYStart)
  pop()   
    } else {

  push()
  image(moonImg,moonX,moonYMap)
  pop() 

    }
    
  
// if (song.currentTime() < whenSingingStart) {
// strokeWeight (0)
// fill (255)
// ellipse (width/2,moonYStart,100+vocal-40,100+vocal-40);
//   } else {
// strokeWeight (0)
// fill (255)
// ellipse (width/2,moonYMap,100+vocal,100+vocal);
//   }


//gardenbase
push()
scale (0.5)
image(gardenbaseImg,0,-15)
pop()    

//mushroom
let mushroomJump = map(bass,0,100,0,40)
push()
scale (0.5)
image(mushroomImg,1,0-mushroomJump)
pop()    

//Fern 4
push()
scale (0.5)
image(fern4Img,0,0)
pop() 

//grass
let grassJump = map (other, 0,100,0,40)
push()
scale (0.5)
image(grassImg,0,0-grassJump)
pop() 

//Fern 3
push()
scale (0.5)
image(fern3Img,0,0)
pop() 

//Fern 1
push()
scale (0.5)
image(fern1Img,0,0)
pop() 

//Fern 2
push()
scale (0.5)
image(fern2Img,0,0)
pop() 
   
//Firefly
let LEFTx_adjustment =7
let LEFTy_adjustment = 35
let RIGHTx_adjustment =34
let RIGHTy_adjustment = 34
let TOPx_adjustment = 11
let TOPy_adjustment = 40

let firefly1_x = 1100
let firefly1_y = 4100

let firefly2_x = 9000
let firefly2_y = 4200

let firefly3_x = 5900
let firefly3_y = 3800

let glowsize = 20
let outerglowsize = 120
let fireflyMap = map (drum,0,100,0,glowsize)
let outerfireflyMap = map (drum,0,100,0,outerglowsize)

let yellow = color(254, 255, 232)
let bright = color (204, 152, 80)
let LerpMap = map (drum,0,200,0,1)
let fireflyfill = lerpColor (yellow,bright,LerpMap)

strokeWeight (0)

//Firefly 1
fill (fireflyfill) //light
ellipse (firefly1_x*0.15+LEFTx_adjustment,firefly1_y*0.15+LEFTy_adjustment,fireflyMap+2,fireflyMap+2)

fill (255, 179, 87,50) //Glow
ellipse (firefly1_x*0.15+LEFTx_adjustment,firefly1_y*0.15+LEFTy_adjustment,outerfireflyMap,outerfireflyMap)

push()
scale (0.15)
image(glowLeftImg,firefly1_x,firefly1_y)
pop()  

//Firefly 2
fill (fireflyfill) //light
ellipse (firefly2_x*0.15+RIGHTx_adjustment,firefly2_y*0.15+RIGHTy_adjustment,fireflyMap+2,fireflyMap+2)

fill (255, 179, 87,50) //Glow
ellipse (firefly2_x*0.15+RIGHTx_adjustment,firefly2_y*0.15+RIGHTy_adjustment,outerfireflyMap,outerfireflyMap)

push()
scale (0.15)
image(glowRightImg,firefly2_x,firefly2_y)
pop()  

//Firefly 3

fill (fireflyfill) //light
ellipse (firefly3_x*0.15+TOPx_adjustment,firefly3_y*0.15+TOPy_adjustment,fireflyMap+2,fireflyMap+2)

fill (255, 179, 87,50) //Glow
ellipse (firefly3_x*0.15+TOPx_adjustment,firefly3_y*0.15+TOPy_adjustment,outerfireflyMap,outerfireflyMap)
  
push()
scale (0.15)
image(glowTopImg,firefly3_x,firefly3_y)
pop()  


// let glowArray = [color(),color(),color(),color()] //create a firefly glow glow, want the alpha value to change

// for(let 1=0, 1<=5,i++){
    
//     fill (glowArray)
//     ellipse (firefly_x+92,firefly_y+96,fireflyMap+4,fireflyMap)
// }



}






