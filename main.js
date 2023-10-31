function setup(){
video = createCapture(VIDEO);
video.size(400, 400);
video.position(430, 130);

canvas = createCanvas(400, 400);
canvas.position(430,130);

poseNet = ml5.poseNet(video,modelDone);
poseNet.on('pose',gotposes);

}

function draw() {
    background("pink");
}

function modelloaded(){
console.log("PoseNet is intialised and loaded");
}


function gotposes(error , results) {
    if(error){
        console.error(error);
    }

    if(results.length > 0){
        console.log(results);

        console.log("rightWrist_x = "+results[0].pose.rightWrist.x + " rightWrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftWrist_x = "+results[0].pose.leftWrist.x + " leftWrist_y = "+results[0].pose.leftWrist.y);
    }
    } 

