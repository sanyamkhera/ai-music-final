leftwristx=0;
leftwristy=0;
rightwristx=0;
rightwristy=0;
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
    }
    function modelloaded(){
      console.log("poseNet is initialised");
    }
    
    song1="";
song2="";
     function draw(){
        image(video,0,0,600,500);
    
     }    
 function preload(){
    song1=loadSound("song01.mp3");
    song2=loadsound("song02.mp3")

 }  
 function play(){
    song.play();
    song.setVolume(1);
    song.setrate(1) 

 }  
 function gotposes(results){
   if (results.length > 0){
      console.log(results);
      leftwristx=results[0].pose.leftWrist.x;
      leftWristy=results[0].pose.leftWrist.y;
      console.log("leftWristx= "+leftwristx +" leftwristy= "+leftwristy);
      rightwristx=results[0].pose.rightWrist.x;
      rightWristy=results[0].pose.rightWrist.y;
      console.log("rightWristx= "+rightwristx +" rightwristy= "+rightwristy);
   }
 }