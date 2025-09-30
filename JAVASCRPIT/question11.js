function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("welcome to india"));

settimeinterval(() => {
    console.log("Hello after 3 seconds");
}, 3000);

function settimeinterval(callback, interval) {
    let timerId = setInterval(callback, interval);
    return timerId;
}

const intervalId = settimeinterval(() => {
    console.log("Hello every 2 seconds");
}, 2000);


// setTimeout(() => {
//     clearInterval(intervalId);
//     console.log("Interval stopped");
// }, 10000);
