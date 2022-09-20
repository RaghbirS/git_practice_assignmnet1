function isPrime(N){
    if(N<=1 || N==undefined){
        return false
    }
    result = true
    for(let i = 2;i<=N**0.5;i++){
        if(N%i==0){
            result=false;
        }
    }
    return results;
}

console.log(isPrime(13))