
function Config(base) {
  this.base = base
  this.entry = []
}

Config.prototype.build = function () {
  // return this.config
}

Config.prototype.entry = function (entry) {
  this.entry = entry instanceof Array ? entry : [entry]
  return this
}

Config.prototype.addEntry = function (entry) {
  if (this.entry instanceof Array) {
    this.entry.push(entry)
  } else {
    throw new TypeError('only use addEntry when your entry is an array')
  }
  return this
}

Config.prototype.style = function (options) {
  this.style = options
  return this
}

function make() {
  return new Config()
}

module.exports = make
