import FibonacciResourceClient from "../ResourceClient/FibonacciResourceClient.js";

function SendParameters() {
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let numberArray = [];
    numberArray.push(numberOne);
    numberArray.push(numberTwo);
    FibonacciResourceClient.findBySuccession(numberArray).then((response) => {
        return response.json();
    }).then((data) => {
        let div = document.querySelector("#divSuccession");
        for (let i = 0; i < data.lenght; i++) {
            let p = document.createElement('p');
            div.appendChild(p);
        }
    });

}
