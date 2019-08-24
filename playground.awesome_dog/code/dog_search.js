var http = require('http')
var console = require('console')

module.exports.function = function dog_search (breed, subbreed) {
  var results = []

  //two
  //var dogAPI_two = "https://dog.ceo/api/breed/retriever/golden/images/random"

  //one
  //var dogAPI_one = "https://dog.ceo/api/breed/boxer/images/random"

  if (subbreed)
  {
    console.log(tessst)
  }

  if (!subbreed){
    if (breed) {
      var dogAPI = "https://dog.ceo/api/breed/"
      dogAPI = dogAPI.concat(breed)
      dogAPI = dogAPI.concat("/images/random")
      
      console.log(dogAPI)
      console.log(breed)
    }
  }


  var template = {}

  var tmpResults = http.getUrl(dogAPI, {format: 'text'});
  tmpResults = JSON.parse(tmpResults) 

console.log("outside")
console.log(tmpResults)

for (var i = 0; i < tmpResults.message[i].length; i++) {
  console.log("Inside!!!")
  template = ({
    dog_image: {
      url: tmpResults.message
    }, 
  });
 results.push(template)
}

  console.log(results)
  return results
}
