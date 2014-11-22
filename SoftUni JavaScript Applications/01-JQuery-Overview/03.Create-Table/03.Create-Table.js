$(document).ready(function () {
    $.getJSON('table.json', function (data) {
//        console.log(data);
        $table = $('<table>')
            .appendTo('body');
        $th = $('<thead>')
            .appendTo($table);

        $.each(data, function (index, object) {
            $tableRow = $('<tr/>');

            Object.keys(object).forEach(function (key) {
                if (index == 0) {
                    var headerText = capitaliseFirstLetter(key);
                    $th.append($('<th>').append(headerText));
                }
                $td = $('<td>')
                    .append(object[key]);
                $tableRow
                    .append($td);
            });

            $table
                .append($tableRow);
        });

    });

    function capitaliseFirstLetter(string)
    {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
});