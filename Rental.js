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