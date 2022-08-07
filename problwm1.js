function findMin(arr){
    let min = arr[0];
    for(i = 0; i < arr.length; i++){
        const element = arr[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}
const arr = [5, 4, 12, 15, 6, 20, 15, 2, 8, 14];
const minNumber = findMin(arr);
console.log(minNumber);