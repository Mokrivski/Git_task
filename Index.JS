let n = 10;
nextPrime:
for(let i = 3; i<=n; i++){
    for(let j = 3; j < i; j++){
        if(i % j == 0) continue nextPrime;
    }
    console.log(i);
}