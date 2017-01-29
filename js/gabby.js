//Gabbycat's vocabulary
var gabbyVocab = ["purr purr purr!", "escape grasps", "chew a cable", "kitten face", "cute ears", "camouflage", "ambush", "stealth attack!", "flop!", "belly rubs", "sqirm", "worm", "chase the stick?", "hide under covers.", "big eyes", "tail swish", "snuggle", "cuddle", "sniff", "scratch the carpet", "watch the birds", "mrrraow!", "hiss", "paw your face", "whiskers tickles", "where's the laser?", "meow", "shed everywhere", "land on my feet", "make mummy laugh", "sit on daddy's lap", "wash wash whaa-?", "butthole must sparkle", "love my humans", "where's my food?", "bat bat bat", "ignore you", "look away", "staring contest", "knead the blankie", "if I fits, I sits!"];

function gabbycatIpsum(elemID) {

  //set minimum and maximum phrase count
  //I'll have to come back and revisit so that 
  //users can set the number of words exactly
  var minWord = 10; //document.getElementById('min-word').value;
  var maxWord = 40; //document.getElementById('max-word').value;
  
  //set text variables
  var gabbyText = new Array();
  var paraText = "";

  //get div element
  var gabbyCat = document.getElementById(elemID);

  //get number of paragraphs user input
  var numPara = document.getElementById('num-para').value;

  /*if (numPara == 0) {
    gabbyCat.innerHTML = "Gabby needs to know how much to gab!";
  }*/

  //create gabby-div to hold gabbycat ipsum text
  //var gabbyCat = document.createElement("gabby-div");
  //gabbyCat.class = "well center-block";
  //document.getElementById("gab").appendChild(gabbyCat);

  //default first sentence
  gabbyCat.innerHTML = "Gabby ipsum gabby cat chat.";

  for (var i = 0; i < numPara; i++) {
    //generate random count for each paragraph
    var wordCount = Math.floor(Math.random() * (maxWord - minWord)) + minWord;
    for (var j = 0; j < wordCount; j++) {
      //pick a random phrase from vocab array
      var newPhrase = gabbyVocab[Math.floor(Math.random() * (gabbyVocab.length))];
      //select last character of current phrase/para
      var lastChar = paraText.substring(paraText.length - 1, paraText.length);
      //check if last char is terminal punctuation
      if (lastChar == "." || lastChar == "?" || lastChar == "!" || lastChar == "") {
        //if yes, capitalize next letter
        newPhrase = " " + newPhrase.substring(0, 1).toUpperCase() + newPhrase.substring(1, newPhrase.length);
      } else {
        //if no, just add a space and move on
        newPhrase = " " + newPhrase;
      }
      //append new phrase to the current paragraph
      paraText += newPhrase;
    }
    //select last char of paragraph
    var lastChar = paraText.substring(paraText.length - 1, paraText.length);
    //if last char is a letter, append a period
    if (/[a-zA-Z]/.test(lastChar)) {
      gabbyText[i] = paraText + ".</p>";
    } else {
      gabbyText[i] = paraText + "</p>";
    }
    //add paragraph to generated text
    gabbyCat.innerHTML += gabbyText[i];
    //reset paraText
    var paraText = "";
  }
}

//clears the generated text 
function clearElem() {
  document.getElementById('gabby-div').innerHTML = "Gabbycat text will appear here";
  document.getElementById('copystatus').innerHTML = "";
}

//copies generated text to clipboard
//this code was from a kind soul on stackoverflow
//need to revisit and see how it actually works 
//and if I can alter it for my purposes
function copyToClip(elemID) {

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(elemID));
    range.select().createTextRange();
    document.execCommand("Copy");

  } else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(elemID));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
  document.getElementById('copystatus').innerHTML = "Copied to clipboard!";
}