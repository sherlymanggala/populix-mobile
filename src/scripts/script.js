$(function() {
    //buat popover
    $('[grid-icon-toggle=popover').popover({
        trigger: 'focus',
        content: function() {
            var content = $(this).attr("grid-icon-popover-content");
            return $(content).children(".popover-body").html();
        },
        title: function() {
            var title = $(this).attr("grid-icon-popover-content");
            return $(title).children(".popover-heading").html();
        }
    });

    //box notif di signup
    //$('.body-notification-box').hide();
    $('#form-btn-email--reset').click(function() {
        $('.body-notification-box').show();
    })
});