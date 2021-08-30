let destinations = ["Grand Teton", "Bryce Canyon", "Zion", "Lake Tahoe", "Yellowstone"];

let restaurants = ["A Steakhouse", "Sushi Spot", "Pizza Place", "Italian Bistro", "Burger Joint"];

let modeOfTransport = ["Automobile", "Plane", "Train", "Bus"];

let entertainment = ["Hiking", "Bird-watching", "Fishing", "Boating", "Sun-bathing"];

function getRandomItem (array1){ 
    return Math.floor(Math.random() * array1.length );
    }

let myDestination = getRandomItem(destinations);

let myRestaurant = getRandomItem(restaurants);
 
let myTransport = getRandomItem(modeOfTransport);

let myEntertainment = getRandomItem(entertainment);

let newLine = "\r\n"; 

window.alert("Your destination is:" + " " + (destinations[myDestination]))

let userInput = window.prompt("Are you happy with the destination result? yes or no") 

while(userInput === "no"){
    let myDestination = getRandomItem(destinations); window.alert("Your destination is:" + " " + (destinations[myDestination])) 
    let userInput1 = window.prompt("Are you happy with the destination result? yes or no");
    if (userInput1 === "yes"){
        break; 
    }
}
window.alert("Your restaurant is:" + " " + (restaurants[myRestaurant]))

let userInput2 = window.prompt("Are you happy with the restaurant result? yes or no");

while(userInput2 === "no"){
    let myRestaurant = getRandomItem(restaurants); window.alert("Your restaurant is:" + " " + (restaurants[myRestaurant])) 
    let userInput2 = window.prompt("Are you happy with the restaurant result? yes or no");
    if (userInput2 === "yes"){
        break; 
    }
}
window.alert("Your mode of transportation is:" + " " + (modeOfTransport[myTransport]))

let userInput3 = window.prompt("Are you happy with the mode of transportation result? yes or no");

while(userInput3 === "no"){
    let myTransport = getRandomItem(modeOfTransport); window.alert("Your mode of transport is:" + " " + (modeOfTransport[myTransport])) 
    let userInput3 = window.prompt("Are you happy with the mode of transportation result? yes or no");
    if (userInput3 === "yes"){
        break; 
    }
}
window.alert("Your form of entertainment is:" + " " + (entertainment[myEntertainment]))

let userInput4 = window.prompt("Are you happy with the form of entertainment result? yes or no");

while(userInput4 === "no"){

    let myEntertainment = getRandomItem(entertainment); window.alert("Your form of entertainment is:" + " " + (entertainment[myEntertainment])) 
    let userInput4 = window.prompt("Are you happy with the form of entertainment result? yes or no");
    if (userInput4 === "yes"){
        break; 
    }
}

window.confirm("Your destination is:" + " " + (destinations[myDestination]) + newLine + "Your restaurant is:" + " " + 
(restaurants[myRestaurant]) + newLine + "Your mode of transportation is:" + " " + (modeOfTransport[myTransport]) + newLine + 
"Your entertainment will be:" + " " + (entertainment[myEntertainment]) + newLine + "Click OK to confirm your trip.")

console.log("Your destination is:" + " " + (destinations[myDestination]) + newLine + "Your restaurant is:" + " " + 
(restaurants[myRestaurant]) + newLine + "Your mode of transportation is:" + " " + (modeOfTransport[myTransport]) + newLine + 
"Your entertainment will be:" + " " + (entertainment[myEntertainment]) + newLine + "Click OK to confirm your trip.");




