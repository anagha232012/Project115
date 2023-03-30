function preload(){
}

function setup()
{
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
   console.log('PoseNet Is Initialize');
}

function draw(){
 image(video, 0, 0, 500, 400);
}

function gotPoses(results){

    if(results.length > 0)
    {
        console.log(result);
        console.log("mustache x = " + results[0].pose.nose.x);
        console.log("mustache y = " + results[1].pose.nose.y);
    }
}

function take_snapshot(){
    save('mustache.png');
}