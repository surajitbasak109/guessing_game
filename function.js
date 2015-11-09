var target,
  guess_input_text,
  guess_input,
  finished = false,
  guesses = 0,
  target = Math.floor( Math.random() * 50 ) + 1;

function get_input( showValue ) {
  document.getElementById( 'userInput' ).innerHTML = showValue;
  guess_input_text = showValue;
}

function do_guess() {
  
  if( !finished ){
    guess_input = parseInt( guess_input_text );
    guesses++;
    document.getElementById( "userInputValue" ).focus();
    finished = check_guess();
  }

}

function check_guess() {
  var status = document.getElementById( 'status' );

  if ( isNaN( guess_input ) ) {
    status.innerHTML = '<span class="error animated shake">You have not entered a number. Please enter a number in the range 1 to 50.</span>' ;
    return false;
  }

  if( guess_input < 1 || guess_input > 50 ){
    status.innerHTML = '<span class="error animated shake">Please enter a number in the range 1 to 50.</span>';
    return false;
  }

  if ( guess_input < target ) {
    status.innerHTML = '<span class="error animated shake">Your number is too small!</span>';
    return false;
  }

  if( guess_input > target ){
    status.innerHTML = '<span class="error animated shake">Your number is too large!</span>';
    return false;
  }

  status.innerHTML = "<span class=\"success animated bounce\">You got it! The number was " + target + " . It took you " + guesses + " guesses to get the number!</span>";
  return true;

}


