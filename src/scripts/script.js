$(function() {
    //buat popover
    $('[data-toggle=popover').popover({
        trigger: 'focus',
        content: function() {
            var content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        },
        title: function() {
            var title = $(this).attr("data-popover-content");
            return $(title).children(".popover-heading").html();
        }
    });
    
    //box notif di signup
    //$('.notification-box').hide();
    $('#login-btn-email--reset').click(function() {
        $('.notification-box').show();
    })
    
    // toggle password visibility
    $('.form-icon-eye').on('click', function() {
        if($(this).hasClass("fa-eye")) {
            $(this).toggleClass('fa-eye-slash').toggleClass('fa-eye'); // toggle our classes for the eye icon
            $('.form-password').attr("type","text");
        } else {
            $(this).toggleClass('fa-eye').toggleClass('fa-eye-slash'); // toggle our classes for the eye icon
            $('.form-password').attr("type","password");
        }
    });
});