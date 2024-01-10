// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
function wrapGift(gifts) {
    let i = 0; // the initialization moves outside the body of the loop 
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++; // the iteration moves INSIDE the body of the loop!
    }
    return gifts;
}
wrapGift(gifts);

function plantGarden() {
    let keepWorking = true;
    while (keepWorking) {
        chooseSeedLocation();
        plantSeed();
        waterSeed();
        keepWorking = checkForMoreSeeds();
    }
}

