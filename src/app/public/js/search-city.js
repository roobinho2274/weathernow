var botaoBuscar = document.querySelector("#search-cities");
var inputValue = document.querySelector('#inputValue');
var cityName = document.querySelector('.info-name');
var cityCountry = document.querySelector('.info-country');
var cityTemp = document.querySelector('.info-temp');
var cityHumidity = document.querySelector('.info-humidity');
var cityWeather = document.querySelector('.info-weather');

botaoBuscar.addEventListener("click", function () {

  var url = 'https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6a8ca1a76c37978ce9066fd77010a94d';

  var xhr = new XMLHttpRequest();

  xhr.open("GET", url);
  xhr.addEventListener("load", function () {
    var error = document.querySelector("#erro-ajax");
    if (xhr.status == 200) {
      error.classList.add("invisible");
      var responseSearch = xhr.responseText;
      var city = JSON.parse(responseSearch);
      addCity(city);
    } else {
      error.classList.remove("invisible");
      //alert("Cidade errada");
      cleanDescription()
      console.log(error)
    }
  });
  xhr.send();
});
function cleanDescription() {

  cityName.innerHTML = "";
  cityCountry.innerHTML = "";
  cityTemp.innerHTML = "";
  cityHumidity.innerHTML = "";
  cityWeather.innerHTML = "";
}
function addCity(city) {

  cityName.innerHTML = city.name;
  cityCountry.innerHTML = city.sys.country;
  cityTemp.innerHTML = city.main.temp;
  cityHumidity.innerHTML = city.main.humidity;
  cityWeather.innerHTML = city.weather[0].description;
}

function saveLogs(city){
  
}

