var botaoBuscar = document.querySelector("#search-cities");

botaoBuscar.addEventListener("click", function () {
    console.log("Buscando cidades no banco");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var error = document.querySelector("#erro-ajax");
        if (xhr.status == 200) {
            error.classList.add("invisible");
            // var resposta = xhr.responseText;
            // var cities = JSON.parse(resposta);

            var cities = [
                {
                  "id": 833,
                  "name": "Ḩeşār-e Sefīd",
                  "state": "",
                  "country": "IR",
                  "coord": {
                    "lon": 47.159401,
                    "lat": 34.330502
                  }
                },
                {
                  "id": 2960,
                  "name": "‘Ayn Ḩalāqīm",
                  "state": "",
                  "country": "SY",
                  "coord": {
                    "lon": 36.321911,
                    "lat": 34.940079
                  }
                },
                {
                  "id": 3245,
                  "name": "Taglag",
                  "state": "",
                  "country": "IR",
                  "coord": {
                    "lon": 44.98333,
                    "lat": 38.450001
                  }
                }
            ]
            cities.forEach(function(city) {
                addCityOnTable(city);
            });
        } else {
            error.classList.remove("invisible");
            console.log(error)
        }
    });

    xhr.send();

});

function addCityOnTable(city) {
    //Create new tr from City
    var cityTr = makeTr(city);
    //Add new city to table
    var tabela = document.querySelector("#table-cities");
    tabela.appendChild(cityTr);
}

function makeTr(city) {

    var cityTr = document.createElement("tr");
    cityTr.classList.add("cities");

    cityTr.appendChild(makeTd(city.name, "info-name"));
    cityTr.appendChild(makeTd(city.state, "info-state"));
    cityTr.appendChild(makeTd(city.country, "info-country"));
    cityTr.appendChild(makeTd(city.coord.lon, "info-lon"));
    cityTr.appendChild(makeTd(city.coord.lat, "info-lat"));

    return cityTr
}

function makeTd(data, classToInsert) {
    var td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classToInsert);

    return td;
}

function exibeMensagemErro(errors) {
    var listaErros = document.querySelector("#mensagem-erro");
    listaErros.innerHTML = "";
    errors.forEach(function (error) {
        var li = document.createElement("li");
        console.log(error);
        li.textContent = error;
        listaErros.appendChild(li);
    });
}

