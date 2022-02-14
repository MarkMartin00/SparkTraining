function fib(number) {
    // base cases
    if (number <= 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    }

    // call itself
    else {
        return fib(number - 1) + fib(number - 2);
    }
}

// console.log(fib(4));