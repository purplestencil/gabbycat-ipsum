function gabbycatIpsum(elemID) {

  var gabbyVocab = ["purr purr purr!", "chase the stick ", "hide under blankie.", "big eyes ", "tail swish "];

  var minWord = 5; //document.getElementById('min-word').value;
  var maxWord = 10; //document.getElementById('max-word').value;
  var numPara = 3; //document.getElementById('num-para').value;
  var wordCount = Math.floor(Math.random() * (maxWord - minWord)) + minWord;

  var gabbyText = new Array();
  var paraText = "";

  for (var i = 0; i < numPara; i++) {
    for (var j = 0; j < wordCount; j++) {
      var newPhrase = gabbyVocab[Math.floor(Math.random() * (gabbyVocab.length - 1))];
      var lastChar = paraText.substring(paraText.length - 1, paraText.length);
      if (lastChar == "." || lastChar == "?" || lastChar == "!") {
        newPhrase = newPhrase.substring(0, 1).toUpperCase() + newPhrase.substring(1, newPhrase.length);
      }
      paraText += " " + newPhrase;
    }
    gabbyText[i] = paraText.substring(0, 1).toUpperCase() + paraText.substring(1, paraText.length);
  }
  gabbyText;
  
  var gabbyCat =  document.getElementById(elemID);

  gabbyCat.innerHTML = gabbyCat.innerHTML + "Gabby ipsum " + gabbyText[0].substring(0,1).toLowerCase() + gabbyText[0].substring(1, gabbyText[0].length - 1) + ".</p>";
  
  for (var k = 1; k < numPara; k++) {
    gabbyCat.innerHTML = gabbyCat.innerHTML + gabbyText[k].substring(0, gabbyText[k].length - 1) + ".</p>";
  }
}

function clearElem(elemID) {
  document.getElementById(elemID).innerHTML = "";
}

