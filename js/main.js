$(function () {

  $('#submit').on('click', function(event) {
		event.preventDefault();
		var userEmail = $('#email').val();
		if (userEmail != '') {
			var valid = validateEmail(userEmail);
			if (valid) {
				$('.email-msg').remove();
				$("#submit").unbind("click");
			} else {
				$('.email-msg').remove();
        $('.email-field').append('<span class="email-msg">Please submit a valid email address.<span>');
		  }
		} else {
			$('.email-msg').remove();
      $('.email-field').append('<span class="email-msg">Please submit an email address.</span>');
	  }	
	})

  //Email validation
  function validateEmail(email) {
  	var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  	return pattern.test(email);
	}

	var $recaptcha = document.querySelector('#g-recaptcha-response');
  if($recaptcha) {
      $recaptcha.setAttribute("required", "required");
  }

})