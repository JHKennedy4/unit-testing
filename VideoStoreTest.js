describe( "Video Store Test", function () {

    var newRelease = new Customer("John Doe"),
        childrens = new Movie("New Release", 1),
        regular = new Movie("childrens", 2),
        customer = new Movie("regular", 0);

    describe("regular Rented For One Day", function () {
        it("prints rental record", function () {
            var rental = new Rental(regular, 1);
            customer.addRental(rental);
              
            expect(customer.statement())
            .toBe("Rental Record for John Doe\n"+
                  "\tregular\t2.0\n" +
                  "You owed 2.0\n" +
                  "You earned 1 frequent renter points\n", );
        })
    })

    describe("new Release Rented For One Day", function () {
        it("prints rental record", function () {
            var rental = new Rental(newRelease, 1);
            customer.addRental(rental);
      
            expect(customer.statement())
            .toBe("Rental Record for John Doe\n"+
                  "\tNew Release\t3.0\n" +
                  "You owed 3.0\n" +
                  "You earned 1 frequent renter points\n", customer.statement());
        })
    })

    describe("new Release Rented For Two Days", function () {
        it("prints rental record", function () {
            var rental = new Rental(newRelease, 2);
            customer.addRental(rental);
          
            expect(customer.statement())
            .toBe("Rental Record for John Doe\n"+
                  "\tNew Release\t6.0\n" +
                  "You owed 6.0\n" +
                  "You earned 2 frequent renter points\n", customer.statement());
        })
    })

    describe("childrens Rented For One Day", function () {
        it("prints rental record", function () {
            var rental = new Rental(childrens, 1);
            customer.addRental(rental);
          
            expect(customer.statement())
            .toBe("Rental Record for John Doe\n"+
                  "\tchildrens\t1.5\n" +
                  "You owed 1.5\n" +
                  "You earned 1 frequent renter points\n", customer.statement());
        })
    })

})