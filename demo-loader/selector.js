var path = require('path')
var parse = require('vue-loader/lib/parser')
var loaderUtils = require('loader-utils')
var marked = require('marked')

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    return require('highlight.js').highlight(lang, code).value;
  },
});

module.exports = function (content) {
  this.cacheable()
  var query = loaderUtils.parseQuery(this.query)
  var filename = path.basename(this.resourcePath)
  var parts = parse(content, filename, this.sourceMap)
  var part = parts[query.type][query.index]
  if (query.type === 'template') {

    var source = part.content


    var template_header = '' +
      '<code-panel>\n' +
      '  <div slot="code">\n' +
      marked(`\`\`\`html\n ${content} \n\`\`\``) +
      '  </div>\n' +
      '  <div slot="demo">\n'

    var template_footer = '' +
      '  </div>\n' +
      '</code-panel>\n'

    source = template_header + source + template_footer

    console.log(this._compiler)

    part.content = source

  }
  this.callback(null, part.content, part.map)
}
