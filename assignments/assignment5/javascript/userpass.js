$(document).ready(function(){
    $('#user, #pass').on('blur',function(e){
    $("#demo").html('');
      if($('#user').val() == '') {
        $('#user').focus();
        $('#user').css('background-color','yellow');
        alert('Please enter a username');
        }
        else if ($('#pass').val() == '') {
        if($('#user').val() != '') {
          $('#user').css('background-color','white');
        }
        $('#pass').focus();
        $('#pass').css('background-color','yellow');
        alert('Please enter a password');
        }
        else {
        if($('#user').val() != '') {
          $('#user').css('background-color','white');
        }
        if($('#pass').val() != '') {
          $('#pass').css('background-color','white');
        }
        $('#text').html('<br>Your username and password are...');
        $("#demo").html('<br>Username: ' + $('#user').val() + ' <br>Password: ' + $('#pass').val());
      }
    });

    });
