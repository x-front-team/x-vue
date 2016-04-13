var selectorPath = require.resolve('./selector.js')

module.exports = function (source) {

  source = source.replace(/![^!]*selector\.js/g, '!' + selectorPath)

  return source

}
