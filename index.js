d3.select('#go').on('click', repeatText)

function repeatText() {
  var inputText = d3.select('#input-text').node().value;
  var times = d3.select('#times').node().value;
  var prefix = d3.select('#prefix').node().value;
  var suffix = d3.select('#suffix').node().value;
  // console.log(times);
  var lines = inputText.split('\n');
  var outputText = '';
  lines.forEach(appendMultiples);

  function appendMultiples(line) {
    for (var i = 0; i < times; ++i) {
      outputText += (prefix + line + suffix + '\n');
    }
  }

  d3.select('#results').text(outputText);

  selectElementContents(d3.select('#results').node());
}

function selectElementContents(el) {
  var range = document.createRange();
  range.selectNodeContents(el);
  var sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}
