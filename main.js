
const startIt = () => {
    setTimeout( function () {
        startConfetti();
    }, 1000);
}

const stopIt = () => {
    setTimeout( function () {
        stopConfetti();
    }, 6000);
}

startIt();
stopIt();