module.exports = function(code, lang) {
  var lines = code.split('\n');

  lines = lines.map(function(line, index) {
    var parts = line.split(',');
    if(parts.length > 1) {
      parts = parts.map(function(part) {
        // first row is header
        if(index == 0) {
          return '<span class="hljs-keyword">' + part + '</span>';
        }
        if(!isNaN(parseInt(part, 10))) {
          return '<span class="hljs-number">' + part + '</span>';
        } else {
          return '<span class="hljs-string">' + part + '</span>';
        }
      });
    }
    return parts.join(',');
  });

  return '<pre class="hljs"><code>' + lines.join('\n') + '</code></pre>';
};
