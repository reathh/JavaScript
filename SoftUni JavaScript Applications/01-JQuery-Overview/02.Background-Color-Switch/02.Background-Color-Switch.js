$(function () {
    $('#paintButton').on('click', changeBackground);
});

function changeBackground(){
    var $classValue = $('#class').val();
    var $colorValue = $('#color').val();

    $('.' + $classValue).css('background-color', $colorValue);
}
