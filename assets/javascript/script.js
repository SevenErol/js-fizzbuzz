
const multipleThree = "Fizz";

const multipleFive = "Buzz";

const container = document.querySelector(".container");



for(let i = 1; i <= 100; i++) {

    const boxElement = document.createElement("div");

    boxElement.classList.add("box");

    container.appendChild(boxElement);

    const squareElement = document.createElement("div");

    squareElement.classList.add("square");

    squareElement.classList.add("flex");

    boxElement.appendChild(squareElement);

    const contentElement = document.createElement("div");

    squareElement.appendChild(contentElement);

    if (i % 3 === 0 && i % 5 === 0) {

        console.log(`${multipleThree}${multipleFive}`);

        squareElement.classList.add("fizz_buzz");

        contentElement.innerHTML = `${multipleThree}${multipleFive}`;

    } else if (i % 5 === 0) {

        console.log(multipleFive);

        squareElement.classList.add("buzz");

        contentElement.innerHTML = `${multipleFive}`;

    } else if (i % 3 === 0) {

        console.log(multipleThree);

        squareElement.classList.add("fizz");

        contentElement.innerHTML = `${multipleThree}`;

    } else {

        console.log(i);

        squareElement.classList.add("number");

        contentElement.innerHTML = i;
    }
}