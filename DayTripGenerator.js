//create an array of destinations
let destinations = ["Grand Teton", "Bryce Canyon", "Zion", "Lake Tahoe", "Yellowstone"];
//create an array of restaurants
let restaurants = ["A Steakhouse", "Sushi Spot", "Pizza Place", "Italian", "Burger Joint"];
//create an array of mode of transportation
let modeOfTransport = ["Automobile", "Plane", "Train", "Bus"];
//create an array of form of entertainment
let entertainment = ["Hiking", "Bird-watching", "Fishing", "Boating", "Sun-bathe"];

//create a function to random-generate an index of each array
//Does this function need to hold certain items and reselect others if user isn't satisfied with the results??

function getRandomItem (array1){ 
    return Math.floor(Math.random() * array1.length );
    }


let myDestination = getRandomItem(destinations);

console.log(destinations[myDestination]); //this will log the item at the index of [number] 

let myRestaurant = getRandomItem(restaurants);

console.log(restaurants[myRestaurant]); //logs a random restaurant

let myTransport = getRandomItem(modeOfTransport);

console.log(modeOfTransport[myTransport]); //logs a random mode of transportation

let myEntertainment = getRandomItem(entertainment);

console.log(entertainment[myEntertainment]); //logs a random form of entertainment

window.alert("Your destination is" + " " + (destinations[myDestination]) +" " + "Your restaurant is a" + " " + 
(restaurants[myRestaurant])+" " + "Your mode of transportation is" + " " + (modeOfTransport[myTransport])+" " + 
"Your entertainment will be" + " " + (entertainment[myEntertainment]));
//clean the presentation up....line breaks??

let userInput = window.prompt("Are you happy with the results?")

//window.prompt "are you happy with the results?"
while(userInput === "no"){
    let myDestination = getRandomItem(destinations); window.alert("your destination is" + (destinations[myDestination])) 
    let userInput1 = window.prompt("Are you happy with the result?");
    if (userInput1 === "yes"){
        break; //user input yes is not breaking the loop....find solution!!!!!
    }
}
