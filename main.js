//https://teachablemachine.withgoogle.com/models/3kFjDn1Tg//

  function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3kFjDn1Tg/model.json",modelReady)
  }

  function modelReady(){
    classifier.classify(gotResults)
  }
   function gotResults(error,results){
    console.log("gotResults")
   }
    function gotResult(error,results) {
      if(error){ 
          console.error(error)
         
      }
    else{random_number_r = Math.floor(Math.random() * 255) + 1;
      random_number_g = Math.floor(Math.random() * 255) + 1;
      random_number_b = Math.floor(Math.random() * 255) + 1;
      document.getElementById("result_label").innerHTML="posso ouvir-"+results[0].label
      document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
      document.getElementById("result_confidence").innerHTML="precisao-"+(results[0].confidence*100).toFixed(2)+"%"
      document.getElementById("result_confidence").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    



      img1=document.getElementById("neymar")
      img2=document.getElementById("pedro")
      img3=document.getElementById("vini_jr")
      img4=document.getElementById("paqueta")

      if(results[0].label=="palmas"){
      
        img1.src="neymar.gif"
        img2.src="j4.jpg"
        img3.src="j1.jpg"
        img4.src="j2.jpg"
      }
      else if(results[0].label=="sino"){
        img1.src="neymar.jpg"
        img2.src="pedro.gif"
        img3.src="j1.jpg"
        img4.src="j2.jpg"

      }
      else if(results[0].label=="estalos"){
        img1.src="neymar.jpg"
        img2.src="j4.jpg"
        img3.src="jogador2.gif"
        img4.src="j2.jpg"

      }
      else {
        img1.src="neymar.jpg"
        img2.src="j4.jpg"
        img3.src="j1.jpg"
        img4.src="j3.gif"

      }
    }
    }




  
    