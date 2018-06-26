import FibonacciResourceClient from "../ResourceClient/FibonacciResourceClient.js";

let frc = new FibonacciResourceClient();

let btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", (e) => {

    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
    let numberArray = [];
    numberArray.push(numberOne);
    numberArray.push(numberTwo);

    frc.findBySuccession(numberArray).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        let div = document.querySelector("#divSuccession");
        div.innerHTML = "";
        div.setAttribute('class', 'container');
        let h3 = document.createElement('h3');
        h3.innerText = "Valores:";
        div.appendChild(h3);

        for (let i = 0; i < data.length; i++) {
            let p = document.createElement('p');
            p.innerText = data[i];
            div.appendChild(p);
        }
    });

});