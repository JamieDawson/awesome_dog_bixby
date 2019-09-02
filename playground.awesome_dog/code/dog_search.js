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

  if (!breed)
    breed = random_breed[random_num]

  if (!subbreed)
    subbreed = '' //prevents it from being undefined.

  var tmpResults;

  try {
    dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/").concat(subbreed).concat("/images/random")
    tmpResults = http.getUrl(dogAPI, {format: 'text'});
  }
  catch(e) {
    if (!tmpResults) {
      console.log("subbred not working!!!!!!")
      if (!breed)
        breed = random_breed[random_num]
      dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")
      tmpResults = http.getUrl(dogAPI, {format: 'text'});
      subbreed = " " //if we are here, subbreed is invalid and we don't want it
    }
    // Just provide an empty result
    else if (breed) {  //if we are here that means breed
      dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random"); 
      console.log("breed found")
      return; // breed is always valid.
    }
  }


  tmpResults = JSON.parse(tmpResults) 

  console.log("template here")
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
