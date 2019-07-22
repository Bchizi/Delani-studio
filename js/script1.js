$(document).ready(function () {
    $('#p1,#p2,#p3').hide();
    $('#img_toggle1').click(function () {
        $('#p1').toggleclass();
    });
    $('#img_toggle2').click(function () {
        $('#p2').toggleclass();
    });
    $('#img_toggle3').click(function () {
        $('#p3').toggleclass();
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
            alert('We have received your message. Thank you for reaching out to us.');
        }

    })
});
