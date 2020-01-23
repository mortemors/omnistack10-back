module.exports = function parseSetringAsArray(arrayAsString) {
  if (arrayAsString) {
    return arrayAsString.split(",").map(tech => tech.trim());
  }
};
