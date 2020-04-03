
function variationExample(sentence) {
  let output = document.querySelector('#variation-exp');
  let newSentence = sentence;

  /*
  * we're padding the thing we want to replace to ensure we are capturing
  * just the word and not parts of other words e.g we want `he` and not
  * the `he` part of t`he`
  */
  newSentence = newSentence.replace(' the ', "<span style='color: purple;'> the </span>");
  newSentence = newSentence.replace(' he ', ' she ');
  newSentence = newSentence.replace(' his ', ' her ');

  output.innerHTML = newSentence;
}

function variationOne(sentence) {
  let output = document.querySelector('#variation-one');
  let newSentence = sentence;

  newSentence = newSentence.replace(' window', " <span style='border: solid black 2px'>window</span> ");
  newSentence = newSentence.replace(' another window', " <span style='border: 4px dotted #641212'>another window</span> ");
  newSentence = newSentence.replace('Old Dudley', " <span style='font-weight:bold'>Old Dudley</span> ");
  newSentence = newSentence.replace(' gradually', " <span style='letter-spacing: 2px;'> gradually </span>");
  newSentence = newSentence.replace(' fifteen feet away into ', " <span style='letter-spacing: 5px;'> fifteen feet away into </span>");



  // modify the sentence

  output.innerHTML = newSentence;
}

function variationTwo(sentence) {
  let output = document.querySelector('#variation-two');
  let newSentence = sentence;

  newSentence = newSentence.replace('Old ', ' Young ');
  newSentence = newSentence.replace(' folded ', ' spread ');
  newSentence = newSentence.replace(' gradually', 'abruptly');
  newSentence = newSentence.replace(' he ', ' she ');
  newSentence = newSentence.replace(' his ', ' her ');
  newSentence = newSentence.replace(' blackened ', ' bright ');
  newSentence = newSentence.replace(' red ', ' blue ');


    // modify the sentence

  output.innerHTML = newSentence;
}

function variationThree(sentence) {
  let output = document.querySelector('#variation-three');
  let newSentence = sentence;

  newSentence = newSentence.toUpperCase();

  // modify the sentence

  output.innerHTML = newSentence;
}



let input = document.querySelector('#sentence');

// recomput when the input text changes
input.addEventListener('input', function () {
  let sentence = input.value;
  variationExample(sentence);
  variationOne(sentence);
  variationTwo(sentence);
  variationThree(sentence);
});

// also comput when the page loads
variationExample(input.value);
variationOne(input.value);
variationTwo(input.value);
variationThree(input.value);
