function start_classification() {
    navigator.mediaDevices.getUserMedia({audio:true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/7lHKmZpy1/model.json', modelready)
}

function modelready() {
    classifier.classify(gotresults);
}

function gotresults(error,results) {
    if(error){
        console.error(error);
    }
    else {
        console.log(results);
        randomnumber_r = Math.floor(Math.random()*255)+1;
        randomnumber_g = Math.floor(Math.random()*255)+1;
        randomnumber_b = Math.floor(Math.random()*255)+1;
        document.getElementById("result_label").innerHTML = 'I can hear- '+results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy'+(results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("result_label").style.color = "rgb ("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        document.getElementById("result_confidence").style.color = "rgb ("+randomnumber_r+","+randomnumber_g+","+randomnumber_b+")";
        img1 = document.getElementById("alien-1");
        img2 = document.getElementById("alien-2");
        img3 = document.getElementById("alien-3");
        img4 = document.getElementById("alien-4");
        if(results[0].label=="Click"){
            img1.src = 'aliens-01.gif';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        }
        else if (results[0].label=="Press"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.gif';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.png';
        }
        else if (results[0].label=="Snap"){
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.gif';
            img4.src = 'aliens-04.png';
        }
        else{
            img1.src = 'aliens-01.png';
            img2.src = 'aliens-02.png';
            img3.src = 'aliens-03.png';
            img4.src = 'aliens-04.gif';
        }
    }
    
}