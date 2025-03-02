function isPrime(n) {
    if (n < 2) return false;
    
    for (let i = 2; i * i <= n; i++) { // Loop runs up to √n
        if (n % i === 0) return false;
    }
    
    return true;
}

console.log(isPrime(29)); 
console.log(isPrime(25)); 
