
const multipleThree = "Fizz";

const multipleFive = "Buzz";

const container = document.querySelector(".container");



for(let i = 1; i <= 100; i++) {

    const boxElement = document.createElement("div");

    boxElement.classList.add("box");

    container.appendChild(boxElement);

    const squareElement = document.createElement("div");

    squareElement.classList.add("square");

    boxElement.appendChild(squareElement);

    if (i % 3 === 0 && i % 5 === 0) {

        console.log(`${multipleThree}${multipleFive}`);

    } else if (i % 5 === 0) {

        console.log(multipleFive);

    } else if (i % 3 === 0) {

        console.log(multipleThree)

    } else {
        console.log(i);
    }
}