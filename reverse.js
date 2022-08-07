function reverse(text){
    let reverse = "";
    for(i = text.length - 1; i != -1; i--){
        const element = text[i];
        reverse += element;
    }
    return reverse
}
const text = "I am Saqib";
const reverseStr = reverse(text);
console.log(reverseStr);