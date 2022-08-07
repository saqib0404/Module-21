function average(arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        const element = arr[i];
        sum += element;
    }
    const average = sum / arr.length;
    return average
}
const arr = [5, 10, 15, 20, 10]
const myAverage = average(arr);
console.log(myAverage);