$(document).ready(function(){
  $("#userInput").submit(function(event){
    event.preventDefault();
    var splitInputs = $("input#inputSentence").val().split(" ");
    // alert(splitInputs.length);
    var basket = [];
    var inputLength = splitInputs.length;
    var count = 0;
    for(var i = 0; i < inputLength; i++){
      var counter = 0;
      var numberOf = [];
      for(var j = 1; j < inputLength; j++){
        if(splitInputs[j] === splitInputs[i]){
        counter+= 1;
        basket.push(splitInputs[j] +counter);

      }
        // alert(couter + " j: " basket);
      }
        // alert(couter + " i: " basket);
    }
    // var uniq = splitInputs
    // .map((name) => {
    //   return {count: 1, name: name}
    // })
    // .reduce((a, b) => {
    //   a[b.name] = (a[b.name] || 0) + b.count
    //   return a
    // }, {})
    alert(basket);
  });
});


// https://stackoverflow.com/questions/23460367/comparing-elements-of-the-same-array-in-java
// https://stackoverflow.com/questions/840781/easiest-way-to-find-duplicate-values-in-a-javascript-array
