const fibbo = [0, 1];
for(i = 2; i <= 12; i++){
    fibbo[i] = fibbo[i - 1] + fibbo[i - 2];
    // console.log(fibbo);
}

console.log(fibbo);