d3.select('#go').on('click', repeatText)

function repeatText() {
  var inputText = d3.select('#input-text').node().value;
  var times = d3.select('#times').attr('value');
  // console.log(times);
  var lines = inputText.split('\n');
  var outputText = '';
  lines.forEach(appendMultiples);

  function appendMultiples(line) {
    for (var i = 0; i < times; ++i) {
      outputText += (line + '\n');
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
