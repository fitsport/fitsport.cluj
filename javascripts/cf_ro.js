$(function() {
  $('.error').hide();
  $('input.text-input').css({backgroundColor:"#FFFFFF"});
  $('textarea.text-input').css({backgroundColor:"#FFFFFF"});
  $('input.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFFFEE"});
  });
  $('textarea.text-input').focus(function(){
    $(this).css({backgroundColor:"#FFFFEE"});
  });
  $('input.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });
  $('textarea.text-input').blur(function(){
    $(this).css({backgroundColor:"#FFFFFF"});
  });

  $(".button").click(function() {
		// validate and process form
		// first hide any error messages
    $('.error').hide();
		
	  var name = $("input#name").val();
		if (name == "") {
      $("label#name_error").show();
      $("input#name").focus();
      return false;
    }
		var email = $("input#email").val();
		if (email == "") {
      $("label#email_error").show();
      $("input#email").focus();
      return false;
    }
		var mess = $("textarea#mess").val();
		if (mess == "") {
      $("label#mess_error").show();
      $("textarea#mess").focus();
      return false;
    }
		
		var dataString = 'name='+ name + '&email=' + email + '&mess=' + mess;
		//alert (dataString);return false;
		
		$.ajax({
      type: "POST",
      url: "bin/process.php",
      data: dataString,
      success: function() {
        $('#contact_form').html("<div id='message'></div>");
        $('#message').html("<h3>Va multumim!</h3>")
        .append("<h5>Mesajul a fost trimis.</h5>")
        .hide()
        .fadeIn(1500, function() {
          $('#message').append("<img id='checkmark' src='images/check.png'/>");
        });
      }
     });
    return false;
	});
});
runOnLoad(function(){
  $("input#name").select().focus();
});
