import InputOutputResourceClient from "../ResourceClient/InputOutputResourceClient.js";

let iorc = new InputOutputResourceClient();

let btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", (e) => {

    let text = document.getElementById("text").value;

    iorc.converterStream(text).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        let div = document.querySelector("#divText");
        div.innerHTML = "";
        div.setAttribute('class', 'container');
        let h3 = document.createElement('h3');
        h3.innerText = "Resultado:";
        div.appendChild(h3);

        let p = document.createElement('p');
        p.innerText = data;
        div.appendChild(p);

    });

});