
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



// let skymap = map(song.currentTime(), 0,256, 0, 1);

// let duskcolor = color(65, 101, 115)
// let nightcolor = color (12, 18, 28)

// let skylerp = lerpColor (duskcolor,nightcolor,skymap)

// push()
// fill (skylerp)
// rect(720,405,1440,810)
// pop()

skymap2 = map(song.currentTime(), 0,256, 255,0 );

push()
image (nightImg,0,0)
pop()

push()
tint(255,skymap2)
image (duskImg,0,0)
pop()

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

let moonYStart = 720;
let moonX = width/2-140
let moonYEnd = 100;

let whenSingingStart = 27;
let whenSingingEnd = 256;

let moonYMap= map(song.currentTime(), whenSingingStart ,whenSingingEnd, moonYStart, moonYEnd);
let moonScale= map (vocal,0,100,1,1.2)
let moonScale1= map (vocal,0,100,1,1.3)
let moonScale2 = map (vocal, 0,100, 1,1.5)
let moonScale3 = map (vocal, 0,100, 1,1.7)

let moonOpacitymap= map (vocal,0,100,255,100)


if (song.currentTime() < whenSingingStart) {
  strokeWeight (0)
  push()
  tint(255,moonOpacitymap)
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
  

// let littlefireflyMap = map (drum,0,100,0,15)
// let littlefireflycolourMap = map (drum,0,100,0,100)

// let littleglow = color (255, 179, 87,littlefireflycolourMap)
// let littlefill = color (254, 255, 232)

//     if (drum <100) {
//       //Lower little fireflies 
//      fill (littlefill)
//      ellipse (20,270, littlefireflyMap-2,littlefireflyMap-2)
//      fill (littleglow)
//      ellipse (20,270,littlefireflyMap+4,littlefireflyMap+4)
    
//      fill (littlefill)
//      ellipse (500,610, littlefireflyMap-2,littlefireflyMap-2)
//      fill (littleglow)
//      ellipse (500,610,littlefireflyMap+4,littlefireflyMap+4)
    
//      fill (littlefill)
//      ellipse (550,700, littlefireflyMap-2,littlefireflyMap-2)
//      fill (littleglow)
//      ellipse (550,700,littlefireflyMap+4,littlefireflyMap+4)
    
//      fill (littlefill)
//      ellipse (1100,550, littlefireflyMap-2,littlefireflyMap-2)
//      fill (littleglow)
//      ellipse (1100,550,littlefireflyMap+4,littlefireflyMap+4)
    
//      fill (littlefill)
//      ellipse (1400,350, littlefireflyMap-2,littlefireflyMap-2)
//      fill (littleglow)
//      ellipse (1400,350,littlefireflyMap+4,littlefireflyMap+4)
    
//      fill (littlefill)
//      ellipse (1320,475, littlefireflyMap-2,littlefireflyMap-2)
//      fill (littleglow)
//      ellipse (1320,475,littlefireflyMap+4,littlefireflyMap+4)
        
//      } 
     
//      else {
//        //Lower little fireflies 
    
//            //Upper fireflies
//        }
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
let grassJump = map (other, 0,100,0,40)
push()
scale (0.5)
image(grassImg,0,30-grassJump)
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



//Far away firelies
//how to have multiple ifs 

// rectMode (CENTER)

    // pos = createVector(width/2, height/2);

    // push()
    // translate(pos.x, pos.y-size/2)
    // rotate(map(sin(wobble), -1, 1, -22.5, 22.5));
    // translate(0, size/2)
    // rect (100,100,100,100)
    // pop()
    // wobble += 2





// create cirlces with gradually more transparent fills


// let glowArray = [color(),color(),color(),color()] //create a firefly glow glow, want the alpha value to change

// for(let 1=0, 1<=5,i++){
    
//     fill (glowArray)
//     ellipse (firefly_x+92,firefly_y+96,fireflyMap+4,fireflyMap)
// }



}






