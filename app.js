$('input').keypress(function (event) {
    if (event.which === 13) {
        var todoTeksti = $(this).val();
        $(this).val("");
        $('ul').append('<li>' + todoTeksti + '<span><i class="fa fa-trash"</i></span>');
    }
});

$('ul').on('click', 'li', function () {
    $(this).toggleClass('done');
});

$('ul').on('click', "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
