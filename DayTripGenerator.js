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

