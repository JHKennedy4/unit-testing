import junit.framework.TestCase;

public class VideoStoreTest extends TestCase {

  private Movie newRelease;
  private Movie childrens;
  private Movie regular;
  private Customer customer;

  public VideoStoreTest(String name) {
    super(name);
  }

  protected void setUp() {
	customer = new Customer("John Doe");
    newRelease = new Movie("New Release", 1);
    childrens = new Movie("Childrens", 2);
    regular = new Movie("Regular", 0);
  }
  
  public void testSingleRegularRentedForOneDay() {
	  Rental rental = new Rental(regular, 1);
	  customer.addRental(rental);
	  
	  assertEquals("Rental Record for John Doe\n"+
	               "\tRegular\t2.0\n" +
	               "You owed 2.0\n" +
			       "You earned 1 frequent renter points\n", customer.statement());
  }

  public void testSingleNewReleaseRentedForOneDay() {
	  Rental rental = new Rental(newRelease, 1);
	  customer.addRental(rental);
	  
	  assertEquals("Rental Record for John Doe\n"+
	               "\tNew Release\t3.0\n" +
	               "You owed 3.0\n" +
			       "You earned 1 frequent renter points\n", customer.statement());
  }
  
  public void testSingleNewReleaseRentedForTwoDays() {
	  Rental rental = new Rental(newRelease, 2);
	  customer.addRental(rental);
	  
	  assertEquals("Rental Record for John Doe\n"+
	               "\tNew Release\t6.0\n" +
	               "You owed 6.0\n" +
			       "You earned 2 frequent renter points\n", customer.statement());
  }
  
  public void testSingleChildrensRentedForOneDay() {
	  Rental rental = new Rental(childrens, 1);
	  customer.addRental(rental);
	  
	  assertEquals("Rental Record for John Doe\n"+
	               "\tChildrens\t1.5\n" +
	               "You owed 1.5\n" +
			       "You earned 1 frequent renter points\n", customer.statement());
  }
}