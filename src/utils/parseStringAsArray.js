module.exports = function parseSetringAsArray(arrayAsString){
  return arrayAsString.split(',').map(tech => tech.trim())
}