var Customer = require('./Customer'),
    Rental = require('./Rental'),
    Movie = require('./Movie'),
    $ = require('jquery'),
    console = require('console-browserify');

var cust;

$('form#customer').on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    cust = new Customer($('input[name=customerName]', '#customer').val());

    console.log(cust.getName());

});


$('form#rental').on('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();

    var val = $('input[name=category]:checked', '#rental').val();
    var title = $('input[name=title]', '#rental').val();
    var days = $('input[name=days]', '#rental').val();

    if(!cust) {
        alert('make a customer');
    } else {
        console.log(title);
        console.log(val);
        console.log(days);
        cust.addRental(new Rental(new Movie(title, val), days));
    }

});

$('#print').on('click', function () {
    console.log(cust.statement());
    $('.statement').html(cust.statement());
});