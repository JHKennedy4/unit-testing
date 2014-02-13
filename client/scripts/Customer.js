var Movie = require('./Movie');

function Customer (name) {
	this._name = name;
	this._rentals = []; //new Vector();
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

module.exports = Customer;