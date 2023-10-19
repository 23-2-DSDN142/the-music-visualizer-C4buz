
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
let duskImg;
let nightImg;

let treeImg;
let tree2Img;
let treeshineImg;

let grass1Img;
let grass2Img;
let grass3Img;
let grass4Img;
let grass5Img;
let grass6Img;
let grass7Img;
let grass8Img;
let grass9Img;
let grass10Img;

let pos;
let wobble = 0
let size = 100

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
  duskImg = loadImage ('dusk.png')
  nightImg = loadImage ('night.png')

  treeImg = loadImage ('tree.png')
  tree2Img = loadImage ('tree2.png')
  treeshineImg = loadImage ('treeshine.png')

  grass1Img = loadImage ('grass1.png')
  grass2Img = loadImage ('grass2.png')
  grass3Img = loadImage ('grass3.png')
  grass4Img = loadImage ('grass4.png')
  grass5Img = loadImage ('grass5.png')
  grass6Img = loadImage ('grass6.png')
  grass7Img = loadImage ('grass7.png')
  grass8Img = loadImage ('grass8.png')
  grass9Img = loadImage ('grass9.png')
  grass10Img = loadImage ('grass10.png')
  
  
  firstRun = false
  }

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

let firefly4_x = 200
let firefly4_y = 2400

let firefly5_x = 6720
let firefly5_y = 4400

let firefly6_x = 200
let firefly6_y = 4900

let glowsize = 20
let outerglowsize = 120
let fireflyMap = map (drum,0,100,0,glowsize)
let outerfireflyMap = map (drum,0,100,0,outerglowsize)

let yellow = color(254, 255, 232)
let bright = color (204, 152, 80)
let LerpMap = map (drum,0,200,0,1)
let fireflyfill = lerpColor (yellow,bright,LerpMap)
let glow = color (255, 179, 87,40)


// Gradient Background 

skymap2 = map(song.currentTime(), 0,256, 255,0 );

push()
image (nightImg,0,0)
pop()

push()
tint(255,skymap2)
image (duskImg,0,0)
pop()


// Vocal moon

let moonYStart = 720;
let moonX = width/2-140
let moonYEnd = 100;

let whenSingingStart = 25.5;
let whenSingingEnd = 240;

let moonYMap= map(song.currentTime(), whenSingingStart ,whenSingingEnd, moonYStart, moonYEnd);
let moonScale= map (vocal,0,100,1,1.2)
let moonScale1= map (vocal,0,100,1,1.3)
let moonScale2 = map (vocal, 0,100, 1,1.5)
let moonScale3 = map (vocal, 0,100, 1,1.7)

if (song.currentTime() < whenSingingStart) {
  strokeWeight (0)
  push()
  image(moonImg,moonX,moonYStart)
  pop()   

  } else {

  strokeWeight(0)
  fill (219, 251, 255,30)
  ellipse (width/2+12,moonYMap+155,270*moonScale,265*moonScale)
  ellipse (width/2+12,moonYMap+155,270*moonScale1,265*moonScale1)
  ellipse (width/2+12,moonYMap+155,270*moonScale2,270*moonScale2)
  ellipse (width/2+12,moonYMap+155,270*moonScale3,270*moonScale3)

  push()
  
  image(moonImg,moonX,moonYMap)
  pop() 

    }

let treeshineheight = map (song.currentTime(), whenSingingStart ,whenSingingEnd, 50, 200)
let treeshine = map (vocal,0,100,treeshineheight,255)


if (song.currentTime() < whenSingingStart) {

push()
scale(0.5)
image(treeImg,0,0)
pop()

} else{

push()
scale(0.5)
tint (255,moonYMap)
image(treeImg,0,0)
pop()

push()
scale(0.5)
image(tree2Img,0,0)
pop()

push()
scale(0.5)
tint (255,treeshine)
image(treeshineImg,0,0)
pop()

}

//gardenbase
push()
scale (0.5)
image(gardenbaseImg,0,0)
pop()    

//mushroom
let mushroomJump = map(bass,0,100,0,40)
push()
scale (0.5)
image(mushroomImg,1,20-mushroomJump)
pop()    

//Fern 4
push()
scale (0.5)
image(fern4Img,0,30)
pop() 

//grass
let grassJump = map (other, 0,100,0,82)
let grassJump2 = map (other, 0,100,0,90)
let grassJump3 = map (other, 0,100,0,100)


//Grass 1
push()
scale (0.5)
image(grass1Img,0,80-grassJump3)
pop() 

//Grass 2
push()
scale (0.5)
image(grass2Img,0,80-grassJump2)
pop() 

//Grass 3
push()
scale (0.5)
image(grass3Img,0,80-grassJump)
pop() 

//Grass 4
push()
scale (0.5)
image(grass4Img,0,70-grassJump3)
pop() 

//Grass 5
push()
scale (0.5)
image(grass5Img,0,80-grassJump2)
pop() 

//Grass 6
push()
scale (0.5)
image(grass6Img,0,80-grassJump3)
pop() 

//Grass 7
push()
scale (0.5)
image(grass7Img,0,80-grassJump)
pop() 

//Grass 8
push()
scale (0.5)
image(grass8Img,0,80-grassJump2)
pop() 

//Grass 9
push()
scale (0.5)
image(grass9Img,0,80-grassJump)
pop() 

//Grass 10
push()
scale (0.5)
image(grass10Img,0,80-grassJump2)
pop() 


//Fern 3
push()
scale (0.5)
image(fern3Img,0,60)
pop() 

//Fern 1
push()
scale (0.5)
image(fern1Img,0,60)
pop() 

//Fern 2
push()
scale (0.5)
image(fern2Img,0,60)
pop() 
   
//Firefly
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

fill (glow) //Glow
ellipse (firefly2_x*0.15+RIGHTx_adjustment,firefly2_y*0.15+RIGHTy_adjustment,outerfireflyMap,outerfireflyMap)

push()
scale (0.15)
image(glowRightImg,firefly2_x,firefly2_y)
pop()  

//Firefly 3

fill (fireflyfill) //light
ellipse (firefly3_x*0.15+TOPx_adjustment,firefly3_y*0.15+TOPy_adjustment,fireflyMap+2,fireflyMap+2)

fill (glow) //Glow
ellipse (firefly3_x*0.15+TOPx_adjustment,firefly3_y*0.15+TOPy_adjustment,outerfireflyMap,outerfireflyMap)
  
push()
scale (0.15)
image(glowTopImg,firefly3_x,firefly3_y)
pop()  

//Firefly 4

fill (fireflyfill) //light
ellipse (firefly4_x*0.15+RIGHTx_adjustment,firefly4_y*0.15+RIGHTy_adjustment,fireflyMap+2,fireflyMap+2)

fill (glow) //Glow
ellipse (firefly4_x*0.15+RIGHTx_adjustment,firefly4_y*0.15+RIGHTy_adjustment,outerfireflyMap,outerfireflyMap)
  
push()
scale (0.15)
image(glowRightImg,firefly4_x,firefly4_y)
pop() 

//Firefly 5

fill (fireflyfill) //light
ellipse (firefly5_x*0.15+LEFTx_adjustment,firefly5_y*0.15+LEFTy_adjustment,fireflyMap+2,fireflyMap+2)

fill (255, 179, 87,50) //Glow
ellipse (firefly5_x*0.15+LEFTx_adjustment,firefly5_y*0.15+LEFTy_adjustment,outerfireflyMap,outerfireflyMap)

push()
scale (0.15)
image(glowLeftImg,firefly5_x,firefly5_y)
pop()  

// Firefly 6
fill (fireflyfill) //light
ellipse (firefly6_x*0.15+TOPx_adjustment,firefly6_y*0.15+TOPy_adjustment,fireflyMap+2,fireflyMap+2)

fill (glow) //Glow
ellipse (firefly6_x*0.15+TOPx_adjustment,firefly6_y*0.15+TOPy_adjustment,outerfireflyMap,outerfireflyMap)
  
push()
scale (0.15)
image(glowTopImg,firefly6_x,firefly6_y)
pop()  

}






