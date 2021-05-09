

$(document).ready(function () {
    GetEmployees();
    GetStores();
});

function GetMarkups() {
    // Send an AJAX request
    $.getJSON("api/Markups")
        .done(function (data) {

            $.each(data, function (key, item) {

                $('<li>', { text: formatItem(item) }).appendTo($('#markups'));
            });
        });
}

function formatItem(item) {
    return 'City : ' + item.City + ', Count: ' + item.Count;
}

function GetEmployees() {
    // Send an AJAX request
    $.getJSON("api/Employee")
        .done(function (data) {

            $.each(data, function (key, item) {

                $('<option>', { text: item, value: item }).appendTo($('#employees'));
            });
        });
}

function GetStores() {
    // Send an AJAX request
    $.getJSON("api/Store")
        .done(function (data) {

            $.each(data, function (key, item) {

                $('<option>', { text: item, value: item }).appendTo($('#stores'));
            });
        });
}

function GetEmployeeSales() {
    let select = document.getElementById("employees");
    let employeeName = select.options[select.selectedIndex].value;
  

    // Send an AJAX request
    $.getJSON("api/EmployeeSales?employeeName=" + employeeName)
        .done(function (data) {
            console.log(data);

            document.getElementById("employeeSales").innerText = "That employee sold $" + data + " for the year";
        });
}

function GetStoreSales() {
    let select = document.getElementById("stores");
    let storeName = select.options[select.selectedIndex].value;
   

    // Send an AJAX request
    $.getJSON("api/StoreSales?storeCity=" + storeName)
        .done(function (data) {
            console.log(data);

            document.getElementById("storeSales").innerText = "That store sold $" + data + " for the year";
        });
}
