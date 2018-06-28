function makeGrid() {

    // Select size input


    var canvas = $('#pixel_canvas');
    var rows = $('#input_height').val();
    var cols = $('#input_width').val();

    canvas.children().remove()

    for (i = 0; i < rows; i++) {
    canvas.append('<tr></tr>');
        for (j = 0; j < cols; j++) {
         $('tr:last').append('<td></td>');
         $('td').attr("class", 'cell')
        }
    }

   
    // When td is clicked by the user, change color of td
    $('.cell').click(function() {
        // Select color input
        var color;
        color = $("#colorPicker").val();
        $(this).attr('bgcolor', color);
    });

}

// When size is submitted by the user, call makeGrid()
var submitQuery;

submitQuery = $('input[type="submit"]')

submitQuery.click(function(event) {
    event.preventDefault();
    makeGrid();
});

