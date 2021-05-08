
var uri = 'api/NodeOrders';





function find() {
    $('#saveResponse').text = '';
    $("#notes").empty();
    var id = $('#SearchId').val();
    $.getJSON(uri + '/' + id)
        .done(function (data) {
            $('#note').text(formatItem(data));
        })
        .fail(function (jqXHR, textStatus, err) {
            $('#note').text('Error: ' + err);
        });
}





function findMarkup() {
    $("#markups").empty();
    var id = $('#GetMarkups').val();
    $.getJSON("api/Query1" + '/' + id)
        .done(function (data) {
            // On success, 'data' contains a list of products.
            $.each(data, function (key, item) {
                // Add a list item for the product.
                $('<li>', { text: formatItem(item) }).appendTo($('#markups'));
            });
        });
}
function formatItem(item) {
    return item.storeID + ':   ' + item.pricePaid;
}
