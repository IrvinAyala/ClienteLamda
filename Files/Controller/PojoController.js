import PojoResourceClient from "../ResourceClient/PojoResourceClient.js";

let prc = new PojoResourceClient();

let btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", (e) => {

    let selectGroup = document.getElementById("idGroup");
    let group = selectGroup.options[selectGroup.selectedIndex].value

    let selectType = document.getElementById("idType");
    let type = selectType.options[selectType.selectedIndex].value

    prc.findByGroup(group, type).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        let div = document.querySelector("#divTeams");
        div.innerHTML = "";
        div.setAttribute('class', 'container');
        let h3 = document.createElement('h3');
        h3.innerText = "Grupo: " + group;
        div.appendChild(h3);

        let ul = document.createElement('ul');

        for (let i = 0; i < data.countries.length; i++) {
            let li = document.createElement('li');
            console.log(data.countries[i]);
            li.innerText = data.countries[i];
            ul.appendChild(li);
        }
        
        div.appendChild(ul);

    });

});