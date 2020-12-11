$(function () {

  console.log('hi');

  $('#submit').on('click', function(event) {
		event.preventDefault();
		var userEmail = $('#email').val();
		if (userEmail != '') {
			var valid = validateEmail(userEmail);
			if (valid) {
				$('form').prepend('Thank you for submitting!')
			} else {
        $('form').prepend('Please submit a valid email address.')
		  }
		} else {
      $('form').prepend('Please submit an email address.')
	  }	
	})

  //Email validation
  function validateEmail(email) {
  	var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return pattern.test(email);
  }
  
  console.log('hey');
})