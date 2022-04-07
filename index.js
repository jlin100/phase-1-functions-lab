// Code your solution in this file!
function distanceFromHqInBlocks(pickUp) {
    return Math.abs(pickUp - 42);
  }
  distanceFromHqInBlocks(43);
  distanceFromHqInBlocks(50);
  distanceFromHqInBlocks(34);

function distanceFromHqInFeet(pickUp) {
    return Math.abs((pickUp - 42)*264);
}
distanceFromHqInFeet(43);
distanceFromHqInFeet(50);
distanceFromHqInBlocks(34);

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs((destination-start)*264);
  }
distanceTravelledInFeet(43,48);
distanceTravelledInFeet(50,60);
distanceTravelledInFeet(28,34);

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    let feet = Math.abs((destination-start)*264);
    if (feet < 400) {
        return 0;
    } else if (feet >= 400 && feet <= 2000) {
        return feet = (Math.abs((destination-start)*264) - 400)*0.02;
    } else if (feet > 2000 && feet < 2500) {
        return 25;
    } else if (feet >= 2500) {
        return "cannot travel that far";
    }
  }

calculatesFarePrice(43,44);
calculatesFarePrice(34.32);
calculatesFarePrice(50,58);
calculatesFarePrice(34,24);
