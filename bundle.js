(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Customer (name) {
	this._name = name;
	this._rentals = [];
}

Customer.prototype.addRental = function (arg)  {
	this._rentals.push(arg);
};

Customer.prototype.getName = function () {
	return this._name;
};

Customer.prototype.statement = function () {
	var totalAmount = 0,
		frequentRenterPoints = 0,
		rentals = this._rentals,
		result = 'Rental Record for ' + this.getName() + '\n',
		thisAmount,
		rental,
		i = 0;

	for (i; i < rentals.length; i++) {
		thisAmount = 0;
		rental = rentals[i];

		// determines the amount for each line
		switch (rental.getMovie().getPriceCode()) {
		case Movie.REGULAR:
			thisAmount += 2;
			if (rental.getDaysRented() > 2)
				thisAmount += (rental.getDaysRented() - 2) * 1.5;
			break;
		case Movie.NEW_RELEASE:
			thisAmount += rental.getDaysRented() * 3;
			break;
		case Movie.CHILDRENS:
			thisAmount += 1.5;
			if (rental.getDaysRented() > 3)
				thisAmount += (rental.getDaysRented() - 3) * 1.5;
			break;
		}

		// add frequent renter points
		frequentRenterPoints++;
		// add bonus for a two day new release rental
		if (rental.getMovie().getPriceCode() == Movie.NEW_RELEASE &&
				rental.getDaysRented() > 1)
			frequentRenterPoints++;

		result += '\t' + rental.getMovie().getTitle() + '\t' +
				  thisAmount + '\n';
		
		totalAmount += thisAmount;
	}

	//add footer lines
	result += 'You owed ' + totalAmount + '\n';
	result += 'You earned ' + frequentRenterPoints +
			  ' frequent renter points\n';

	return result;
};
},{}],2:[function(require,module,exports){
function Movie (title, priceCode) {
	this._title = title;
	this._priceCode = priceCode;
}

Movie.prototype.getPriceCode = function () {
	return this._priceCode;
};

Movie.prototype.setPriceCode = function (arg) {
	this._priceCode = arg;
};

Movie.prototype.getTitle = function () {
	return this._title;
};

// Static vars
Movie.CHILDRENS = 2;
Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;
},{}],3:[function(require,module,exports){
function Rental (movie, daysRented) {
	this._movie = movie;
	this._daysRented = daysRented;
}

Rental.prototype.getDaysRented = function () {
	return this._daysRented;
};

Rental.prototype.getMovie = function () {
	return this._movie;
};
},{}],4:[function(require,module,exports){
var Customer = require('./Customer'),
    Rental = require('./Rental'),
    Movie = require('./Movie');
},{"./Customer":1,"./Movie":2,"./Rental":3}]},{},[4])