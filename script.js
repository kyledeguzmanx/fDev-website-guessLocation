//COORDINATES FOR PLACES
let placeJA = { //Johnson Auditorium
  north: 34.24168310783179,
  south: 34.24128399188956,
  west: -118.52913319573715,
  east: -118.52873891100923
};

let placeSRC ={ //SRC
  north:34.240596746712,
  south:34.23934172622821,
  west: -118.52516032887289,
  east: -118.52471776438237
};
let placeUL ={  //University Library
  north: 34.24038324784345, 
  south: 34.239507394076774,
  west: -118.53001805718276,
  east: -118.52863671953054
}
let placeSH ={  //Sierra Hall
  north: 34.23844281313466, 
  south: 34.238113529944506,
  west: -118.53137072034752,
  east: -118.53005375571209
};
let placeB5 ={  //B5 Parking Structure
  north:34.2419040629626,
  south:34.24125217432259,
  west: -118.53332310992846,
  east: -118.53196322994852
};

let [numClicks, numCorrect] = [0,0];
generateQuestion();
let [red, green] = ["#FF0000","#00FF00"];



function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.238848820152135, lng: -118.5292107140215},
    zoom: 15.9,
     gestureHandling: "none",
     zoomControl: false,
    mapId: 'c2c8976f178eb1be'
  });

   map.addListener("dblclick", (mapsMouseEvent) => {
     
     let latitude = mapsMouseEvent.latLng.lat();
     let longitude = mapsMouseEvent.latLng.lng();
      alert("long: " + latitude + "\nlat:" + longitude);
     
     verifyAnswer(latitude, longitude);
     numClicks++;
     generateQuestion();
     
   });
} //end-function-initMap

function generateQuestion(){
  var node = document.createElement("h2");
  var textNode;
  
  if(numClicks < 5){
    if(numClicks == 0) textNode = document.createTextNode("Where is C.R. Johnson Auditorium?");
    else if(numClicks == 1) textNode = document.createTextNode("Where is Student Recreation Center?");
    else if(numClicks == 2) textNode = document.createTextNode("Where is University Library?");
    else if(numClicks == 3) textNode = document.createTextNode("Where is Sierra Hall?");
    else if(numClicks == 4) textNode = document.createTextNode("Where is B5 Parking Structure?"); 


    node.appendChild(textNode);
    document.getElementById("questions").appendChild(node); 
    //I spent half an hour debugging because I wrote "getElements with an s"
  }
}//end-function-generateQuestion

function verifyAnswer(lat,lng){
  if(numClicks < 5){
    let valid;
    let color;

    if(numClicks == 0){
      
      valid = lng>= placeJA.west && lng <= placeJA.east && lat>= placeJA.south && lat <= placeJA.north ? true : false;
      
      /*alert(
        "lat: " + lat + 
        "long: " + lng + 
        "west: " + placeJA.west +
        "east: " + placeJA.east + 
        "north: " + placeJA.north + 
        "south: " + placeJA.south 
      );*/
      color = valid ? green : red;
      const rectangle = new google.maps.Rectangle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map,
        bounds: {
          north: placeJA.north,
          south: placeJA.south,
          east: placeJA.east,
          west: placeJA.west,
        },
      });
      
    }
    else if(numClicks == 1){
      valid = lng>= placeSRC.west && lng <= placeSRC.east && lat>= placeSRC.south && lat <= placeSRC.north ? true : false;
       color = valid ? green : red;
      const rectangle = new google.maps.Rectangle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map,
        bounds: {
          north: placeSRC.north,
          south: placeSRC.south,
          east: placeSRC.east,
          west: placeSRC.west,
        },
      });
    }
    else if(numClicks == 2){
      valid = lng>= placeUL.west && lng <= placeUL.east && lat>= placeUL.south && lat <= placeUL.north ? true : false;
       color = valid ? green : red;
      const rectangle = new google.maps.Rectangle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map,
        bounds: {
          north: placeUL.north,
          south: placeUL.south,
          east: placeUL.east,
          west: placeUL.west,
        },
      });
      
    }
     else if(numClicks == 3){
      valid = lng>= placeSH.west && lng <= placeSH.east && lat>= placeSH.south && lat <= placeSH.north ? true : false;
        color = valid ? green : red;
       const rectangle = new google.maps.Rectangle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map,
        bounds: {
          north: placeSH.north,
          south: placeSH.south,
          east: placeSH.east,
          west: placeSH.west,
        },
      });
    }
    else if(numClicks == 4){
      valid = lng>= placeB5.west && lng <= placeB5.east && lat>= placeB5.south && lat <= placeB5.north ? true : false;
       color = valid ? green : red;
      const rectangle = new google.maps.Rectangle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.35,
        map,
        bounds: {
          north: placeB5.north,
          south: placeB5.south,
          east: placeB5.east,
          west: placeB5.west,
        },
      });
    }
    
    if (valid){
      var correctMessage = document.createElement("p");
      var correctMessageTest = document.createTextNode("Your answer is correct!");
      correctMessage.appendChild(correctMessageTest);
      document.getElementById("questions").appendChild(correctMessage);
      numCorrect++;
    }
    else{
       var wrongMessage = document.createElement("p");
      var wrongMessageTest = document.createTextNode("Your answer is wrong!");
      wrongMessage.appendChild(wrongMessageTest);
      document.getElementById("questions").appendChild(wrongMessage);
    }
    
    if(numClicks == 4){
      var numCorrectNode = document.createElement("p");
      var numCorrectMessage = document.createTextNode("Correct: " + numCorrect);
      numCorrectNode.appendChild(numCorrectMessage);
      document.getElementById("questions").appendChild(numCorrectNode);
    }
    
  }
}


  
/*
CREATING MAP, CUSTOMIZING MAP, REMOVING PINS AND LABELS , STYLING MAP ETC
https://www.youtube.com/watch?v=CdDXbvBFXLY&ab_channel=CoderCoder

IMPORT SCRIPT W/ API KEY
https://developers.google.com/maps/documentation/javascript/get-api-key

JAVASCRIPT
https://developers.google.com/maps/documentation/javascript/cloud-based-map-styling

PANNING AND ZOOMING: https://developers.google.com/maps/documentation/javascript/interaction

DOUBLE CLICK EVENt
https://www.techstrikers.com/GoogleMap/Code/how-to-add-dblclick-event-listener-to-google-map.php

GET COORDINATES FROM CLICK EVENT
https://developers.google.com/maps/documentation/javascript/examples/event-click-latlng

ISOLATE LAT VALUE, ISOLATE LONG VALUE
https://stackoverflow.com/questions/8550286/how-to-get-latitude-longitude-onclick-of-a-map-in-google-maps-api-v3-javascript

FIND NORTH, SOUTH, EAST, and WEST BOUNDS FOR EACH BUILDING
- There might have been a better way to do this, but I did it this way. I still can't think of an easier way to do that

DRAW SHAPES
Customize Map (https://www.youtube.com/watch?v=CdDXbvBFXLY&ab_channel=CoderCoder)
  - Draw on Map (https://developers.google.com/maps/documentation/javascript/overlays?csw=1)
  - Shapes on Map (https://developers.google.com/maps/documentation/javascript/shapes#maps_circle_simple-javascript)
  - jFiddle example (https://jsfiddle.net/api/post/library/pure/)


*/
