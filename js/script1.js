$(document).ready(function () {
    $('#img_toggle1').click(function () {
        $('#img_toggle1').toggle();
        $('#p1').toggle();
    });
    $('#p1').click(function () {
        $('#p1').toggle();
        $('#img_toggle1').toggle();
    });

    $('#img_toggle2').click(function () {
        $('#img_toggle2').toggle();
        $('#p2').toggle();
    });
    $('#p2').click(function () {
        $('#p2').toggle();
        $('#img_toggle2').toggle();
    });
    $('#img_toggle3').click(function () {
        $('#img_toggle3').toggle();
        $('#p3').toggle();
    });
    $('#p3').click(function () {
        $('#p3').toggle();
        $('#img_toggle3 ').toggle();
    });

});

$(document).ready(function () {
    $('.overlay').mouseover(function () {
        $('#text').show();
    }).mouseout(function () {
        $('#text').hide();
    });
});


$(document).ready(function () {
    $('#submit').click(function () {
        var Name = $('#Name').val();
        var Email = $('#Email').val();
        var Message = $('#Message');
        if (Name == '' || Email == '' || Message == '') {
            alert('Please make sure you have filled in the form correctly!');
        } else {
            alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
        }

    });
});
