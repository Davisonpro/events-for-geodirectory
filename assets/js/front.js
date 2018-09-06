jQuery(function($) {

});

function geodir_event_get_calendar($container, params) {
    $calendar = jQuery('.geodir_event_calendar', $container);
    $calendar.addClass('geodir-calendar-loading');
    data = 'action=geodir_ajax_calendar' + params;
    jQuery.ajax({
        type: "GET",
        url: geodir_params.ajax_url,
        data: data,
        success: function(html) {
            $calendar.removeClass('geodir-calendar-loading').html(html);
        }
    });
}