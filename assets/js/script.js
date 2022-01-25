let arr = [1, 2, 3, 4, 5, 6];

const squaredMyNumbers = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            sum += Math.pow(arr[i], 2)
        }
    }
    return sum;
}

console.log(squaredMyNumbers(arr));