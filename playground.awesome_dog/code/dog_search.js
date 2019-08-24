var http = require('http')
var console = require('console')

module.exports.function = function dog_search (breed, subbreed) {
  var results = []
  
  //No subbreed said:
  //var dogAPI_one = "https://dog.ceo/api/breed/boxer/images/random"
  
  //subbreed said:
  //var dogAPI_two = "https://dog.ceo/api/breed/retriever/golden/images/random"

  if (subbreed){
    var dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/").concat(subbreed).concat("/images/random") 
  }

  if (!subbreed) {
    if (breed) {
      var dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random")  
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
