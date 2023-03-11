let array = [96, 42, 69, 35, 72,50];
function largeNum(array,n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    // console.log(array);
    let result = array[n - 1];
    return result;
}
console.log(largeNum(array, 3));
document.write("The 3nd Largest Number:" +largeNum(array, 3));