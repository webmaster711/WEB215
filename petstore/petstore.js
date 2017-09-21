
/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
	numAnimals = Number(numAnimals);
	avgFood = Number (avgFood);
    var weeklyFood = numAnimals * avgFood;
	if (weeklyFood > 0){
		   return weeklyFood;	
	}
	else {
		return -1;
	}
					
}
	  weeklyFood = calculateFoodOrder (148, "A");
		
		if (weeklyFood > 0){
		   document.write("Order " + weeklyFood + " kg of Animal food  this week.");	
		}
		else {
			document.write(-1);
        }

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
function mostPopularDays(week) {
	if (week == null || week.length == 0){
		console.log ('mostPopularDays() - null or empty input');
		return null;
	}
	
	var maxDay = new Weekday("",0);
	// first pass -- just try to print max
	for (var i = 0; i < week.length; i++) {
		// current object is week[i]
		var today = week[i];
		//console.log('item = ' + i + ' name= ' + today.name  +  ' traffic = ' + today.traffic);
		// is today the new max?
		if (today.traffic > maxDay.traffic) {
			maxDay.traffic = today.traffic;
			maxDay.name = today.name;
		}
	
	}
	console.log('Most popular is ' + maxDay.name  + ' with traffic of ' + maxDay.traffic + ' days');
	return maxDay.name
}
function Weekday (name, traffic) {
	this.name = name;
	this.traffic = traffic;
}

function testDays(){
	
	var weekday = new Array(7);
	weekday[0] = new Weekday ("Sunday",8);
	weekday[1] = new Weekday ("Monday",6);
	weekday[2] = new Weekday ("Tuesday",8);
	weekday[3] = new Weekday ("Wednesday",11);
	weekday[4] = new Weekday ("Thursday",7);
	weekday[5] = new Weekday ("Friday",14);
	weekday[6] = new Weekday ("Saturday",14);
	
	var answer = mostPopularDays(weekday);
	console.log('Expected Friday got ' + answer);
}

/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!
}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday (name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item (name, barcode, sellingPrice, buyingPrice) {
     this.name = name;
     this.barcode = barcode;
     this.sellingPrice = sellingPrice;
     this.buyingPrice = buyingPrice;
}
 /**
  * A prototype to create Animal objects
  */
function Animal (name, type, breed) {
    this.name = name;
     this.type = type;
     this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}

