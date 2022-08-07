// If-Else rule find max
/* 
function findMax (x, y, z){
    if(x > y && x > z){
        return x;
    }
    else if(y > x && y > z){
        return y;
    }
    else{
        return z;
    }
}
 */


//  Use math.max find max
function findMax (x, y, z){
    const max = Math.max(x, y, z);
    return max
}

const x = 15;
const y = 9;
const z = 10;

const max = findMax(x, y, z);
// console.log(max);

// find min using if-else
/* 
function findMin (x, y, z){
    if(x < y && x < z){
        return x;
    }
    else if(y < x && y < z){
        return y;
    }
    else{
        return z;
    }
}
 */

// find min using Math.min
function findMin(x, y, z){
    const min = Math.min(x, y, z);
    return min;
}
const min = findMin(x, y, z);
console.log(min);