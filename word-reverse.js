function reverse(str){
    const word = str.split (" ");
    const reverse = [];
    for(i = word.length - 1; i != -1; i--){
        const element = word[i];
        reverse.push(element);
    }
    const text = reverse.join(" ");
    return text;
}

const str = "I am Saqib";
const result = reverse(str);
console.log(result);