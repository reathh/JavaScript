var counter = 0;
$(function() {
    $('#toStart').click(appendToStart);
    $('#toEnd').click(appendToEnd);
});


function appendToStart(){
    counter++;

    var $newLi = $('<li>').text('Element: ' + counter);
    $('#elements').prepend($newLi);
}

function appendToEnd() {
    counter++;

    var $newLi = $('<li>').text('Element: ' + counter);
    $('#elements').append($newLi);
}