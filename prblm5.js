// find the second largest number ===>
function secondLargest (num){
    let largest = num[0];
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(element > largest){
            largest = element;
        }
    }
    let second = num[0];
    for(let i = 0; i < num.length; i++){
        const element = num[i];
        if(element < largest && element > second){
            second = element;
        }
    }
    return second;
}
const num = [2, 10, 15, 14, 10, 25, 40, 41, 50, 49, 35];
console.log(secondLargest(num));