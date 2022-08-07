// Function to get the highest number

function maxInArray(heights){
    let tallest = heights[0];
    for(i = 0; i < heights.length; i++){
        const element = heights[i];
        if(element > tallest){
            tallest = element;
        }
    }
    return tallest;
}

const heights = [190, 140, 165, 220, 150, 210];
const tallest = maxInArray(heights);
// console.log(tallest);


// Function to get the lowest number
function minInArray (num){
    let lowest = num[0]
    for(i = 0; i <num.length; i++){
        const element = num[i];
        if(element < lowest){
            lowest = element;
        }
    }
    return lowest;
}
const num = [190, 140, 165, 220, 105, 150, 210];
const  lowest = minInArray(num);
console.log(lowest);
