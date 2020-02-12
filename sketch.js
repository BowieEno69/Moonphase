let moons = [];
let frames = 0;

function setup() {
  createCanvas(500,880)

  frameRate(14);

  for (let i = 0; i < 28; i++){
    if(i < 10){
      moons[i] = loadImage("assets/moons_0"+i+"_delay-0.11s.jpg");
    }else{
      moons[i] = loadImage("assets/moons_"+i+"_delay-0.11s.jpg");
    }
  }

  // moons[0] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[1] = loadImage("assets/moons_01_delay-0.11s.jpg");
  // moons[2] = loadImage("assets/moons_02_delay-0.11s.jpg");
  // moons[3] = loadImage("assets/moons_03_delay-0.11s.jpg");
  // moons[4] = loadImage("assets/moons_04_delay-0.11s.jpg");
  // moons[5] = loadImage("assets/moons_05_delay-0.11s.jpg");
  // moons[6] = loadImage("assets/moons_06_delay-0.11s.jpg");
  // moons[7] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[8] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[9] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[10] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[11] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[12] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[13] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[14] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[15] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[16] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[17] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[18] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[19] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[20] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[21] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[22] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[23] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[24] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[25] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[26] = loadImage("assets/moons_00_delay-0.11s.jpg");
  // moons[27] = loadImage("assets/moons_00_delay-0.11s.jpg");

}

function draw() {
  frames++;
  drawMoons(frames%28);
}


function drawMoons(phase){
  image(moons[phase], 0, 0);
}


