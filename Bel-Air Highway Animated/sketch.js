function setup() {
  createCanvas(600, 400);
  colorMode(HSB,360,100,100);
  frameRate(30);
}

  let x1 = 0;
  let x2 = 0;
  let x3 = 0;


function draw() {
  background('#298dff');
  /*도로*/
  noStroke();
  fill('#ecdac8');
  rect(0,300,300,200);
  fill(0,0,70);
  rect(0,320,300,200);
  
  /*표지판*/
  strokeWeight(0.4);
  stroke(0);
  
  fill(230);
  rect(200,30,20,270);
  fill(230);
  rect(0,30,250,120);
  fill('#13ac03');
  rect(0,35,245,110);
  strokeWeight(0.4);
  stroke(0);
    
  /*차*/
  fill('#ff2929');
  quad(200,220,600,220,600,400,280,400);
  
  fill('#999999');
  quad(213,250,600,250,600,300,270,375);
  
  fill('#eeeeee');
  quad(218,260,600,260,600,290,260,350);
  
  fill(0,0,20);
  circle(600,480,280);
  fill('#fffbeb');
  circle(600,480,210);
  noStroke();
  fill('#e4f4ff');
  circle(600,480,190);
  
  /*움직이는 조각들*/
  strokeWeight(0.4);
  stroke(0);
  
  counter = millis()%10000
  x1 = counter*0.1;
  x2 = x1*1.2;
  x3 = x1*1.5;
  
  let sinv = sin(frameCount * 0.05);
  let v = map(sinv, -1,1,0,20);
  let s = v*0.5
  
  fill(v+50,90,90); 
  ellipse(x3-510,270,s+50,s+40);
  
  fill(v+340,90,90); 
  ellipse(x2-200,30,s+70,s+40);
  
  fill(v+40,90,90);
  quad(x2-360-s,180-s,x2-300+s,160,x2-290+s,170,x2-340-s,200+s);
  
  fill(v+90,90,90);
  quad(x2-120,60+s,x2-60,80+s,x2-80,100-s,x2-140,90-s);
  
  fill(v+120,90,90);
  quad(x3-440,350,x3-380,370,x3-375,380,x3-430,360);
  
  fill(v+200,90,90);
  triangle(x3-330+s,220,x3-300,200+s,x3-315+s,250);
  
  fill(v+180,90,90);
  triangle(x1-30,150-s,x1,s+170,x1-15,s+190);
  
  fill(v,90,90);
  triangle(x2-300-s,120,x2-230+s,80,x2-250+s,150);
  
}
