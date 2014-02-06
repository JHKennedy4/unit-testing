

function Movie (title, priceCode) {
	this._title = title;
	this._priceCode = priceCode;
}

Movie.prototype.getPriceCode = function () {
	return this._priceCode;
}

Movie.prototype.setPriceCode = function (arg) {
	this._priceCode = arg;
}

Movie.prototype.getTitle = function () {
	return this._title;
}

// Static vars
Movie.CHILDRENS = 2;
Movie.REGULAR = 0;
Movie.NEW_RELEASE = 1;

module.exports = Movie;