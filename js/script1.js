$(document).ready(function () {
    $('#p1,#p2,#p3').hide();
    $('#img_toggle1').click(function () {
        $('#p1').toggle();
    });
    $('#img_toggle2').click(function () {
        $('#p2').toggle();
    });
    $('#img_toggle3').click(function () {
        $('#p3').toggle();
    });

});
