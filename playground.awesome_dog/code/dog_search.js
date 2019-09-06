var http = require('http')
var console = require('console')

module.exports.function = function dog_search (breed, subbreed) {
  var results = []

  var random_breed = [
    "beagle", //1
    "boxer", //2
    "chihuahua",//3 
    "dalmatian",//4
    "dingo",//5
    "eskimo", //6
    "greyhound",//7
    "husky", //8
    "labrador", //9
    "maltese", //10
    "mexicanhairless", //11
    "newfoundland", //12
    "otterhound", //13
    "pomeranian", //14
    "pug", //15
    "redbone", //16
    "rottweiler", //17
    "whippet", //18
    ];

  var random_num = Math.floor(Math.random() * 18); //create number between 0-17
  var dogAPI;

  // if (!breed)
  //   breed = random_breed[random_num]

  // if (!subbreed)
  //   subbreed = '' //prevents it from being undefined.

  var tmpResults;

  try {
    //Does subbreed + breed return a valid arguement?
    console.log("Looking at subbreed + breed")
    dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/").concat(subbreed).concat("/images/random")
    tmpResults = http.getUrl(dogAPI, {format: 'text'});
  }
  catch(e) {
    if (!tmpResults) { //subbreed + breed does not return valid arguement.
      subbreed = " "; //Set subbreed to empty since it's returns an invalid arguement!
      console.log("Subbreed does not exist!")
    }
  }

  
//should subbreed be breed?
  try {
    dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")
    tmpResults = http.getUrl(dogAPI, {format: 'text'});
  }
  catch(e){
    if (!tmpResults) {
      console.log("Subbreed should NOT be breed.")
    }
  }


  //Does breed alone return a valid arguement?
  try { 
    dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")
    tmpResults = http.getUrl(dogAPI, {format: 'text'});
  }
  catch(e) {
    if (!tmpResults) { //breed alone does not return a valid arguement
      console.log("Breed does not exist!")
      breed = random_breed[random_num]; //find a random breed
      dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")
      tmpResults = http.getUrl(dogAPI, {format: 'text'});
    }
  }



  tmpResults = JSON.parse(tmpResults) 

  var template = ({
    dog_breed: breed,
    dog_subbreed: subbreed,
    dog_image: {
      url: tmpResults.message
    }, 
  });

  results.push(template)
  return results
}








/*
  try {
    //Does subbreed + breed return a valid arguement?
    console.log("Looking at subbreed + breed")
    dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/").concat(subbreed).concat("/images/random")
    tmpResults = http.getUrl(dogAPI, {format: 'text'});
  }
  catch(e) {
    if (!tmpResults) { //subbreed + breed does not return valid arguement.
      subbreed = " "; //Set subbreed to empty since it's returns an invalid arguement!
      console.log("Subbreed does not exist!")
      try {
        //should subbreed be breed?
        dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")
        tmpResults = http.getUrl(dogAPI, {format: 'text'});
      }
      catch(e){
        if (!tmpResults) {
          console.log("Subbreed should NOT be breed.")
          try { //Does breed alone return a valid arguement?
            dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")
            tmpResults = http.getUrl(dogAPI, {format: 'text'});
          }
          catch(e) {
            if (!tmpResults) { //breed alone does not return a valid arguement
              console.log("Breed does not exist!")
              breed = random_breed[random_num]; //find a random breed
              dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")
              tmpResults = http.getUrl(dogAPI, {format: 'text'});
            }
          }
        }
      }
    }
  }
*/