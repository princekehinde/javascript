var n = 3;
var a = 5.4;
var result = (a << n) === Math.floor(a) * Math.pow(2,n);
console.log(result)

function simulateEvent(chances) {
    var sum = 0;
    chances.forEach(function(chance) {
    sum+=chance;
    });
    var rand = Math.random();
    var chance = 0;
    for(var i=0; i<chances.length; i++) {
    chance+=chances[i]/sum;
    if(rand<chance) {
    return i;
    }
    }
   
    // should never be reached unless sum of probabilities is less than 1
    // due to all being zero or some being negative probabilities
    return -1;
   }
   // simulate weighted dice where 6 is twice as likely as any other face
   // using multiples of likelihood
   console.log("Rolled a "+(simulateEvent([1,1,1,1,1,2])+1)); // Rolled a 1
   // using probabilities
   console.log("Rolled a "+(simulateEvent([1/7,1/7,1/7,1/7,1/7,2/7])+1)); // Rolled a 6