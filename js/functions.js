$( document ).ready(function() {

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: 'contact.php',
            data: $(this).serialize(),
            success: function (data)
            { 
                var messageAlert = 'alert-' + data.type;
                var messageText = data.message;
                var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                
                $('#form-message').html(alertBox);
                $('#contact-form')[0].reset();

            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                var alertBox = '<div class="alert alert-danger alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>Error sending message: ' + errorThrown + '</div>';
                $('#form-message').html(alertBox);
            }
        });
        return false;
    });

    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

});