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

  if (!breed){
    breed = random_breed[random_num]
  }

  if (subbreed){
    var dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/").concat(subbreed).concat("/images/random") 
  }

  if (!subbreed) {
    if (breed) {
      var dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")  
      subbreed = ' '
    }
  }

  var template = {}
  var tmpResults = http.getUrl(dogAPI, {format: 'text'});
  tmpResults = JSON.parse(tmpResults) 

  for (var i = 0; i < tmpResults.message[i].length; i++) {
    template = ({
      dog_breed: breed,
      dog_subbreed: subbreed,
      dog_image: {
        url: tmpResults.message
      }, 
    });
  results.push(template)
  }
  return results
}
