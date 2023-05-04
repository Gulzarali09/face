Webcam.set({
    width:350,
    height:300,
    image_format : 'png' ,
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
        });


}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/F4xhK0-du/model.json',modelLoaded);

function check()
{
    x = document.getElementById('captured_image');
    classifier.classify(x,result)
}

function result(error , answers)
{
    if (error)
    {
        console.log(error)
    }else{
        console.log(answers)
      document.getElementById("result_object_name"). innerHTML = answers[0].label;
      document.getElementById("result_object_accuracy"). innerHTML = answers[0].confidence.toFixed(3);  
    }
}


function modelLoaded(){
    console.log('ml5 version:',ml5.version);
}