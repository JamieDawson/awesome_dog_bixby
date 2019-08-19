var http = require('http')
var console = require('console')

module.exports.function = function dog_search (breed) {
  var results = []
  var dogAPI = "https://dog.ceo/api/breeds/image/random"
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
