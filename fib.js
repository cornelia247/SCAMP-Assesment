function fib(n) {
    if (n <= 1) return 1;
    let prev = 0;
    let curr = 1;
    let fibArray = [0,1];
    for (let i = 1; i < n; i++){
        const next = prev + curr;
        prev = curr;
        curr = next;
        fibArray.push(curr);
    }
    console.log(fibArray);
}