var campoFiltro = document.querySelector("#filter-table");

campoFiltro.addEventListener("input", function(){
   
    var cities = document.querySelectorAll(".cities");
   
    if(this.value.length > 0){
        for(var i = 0; i < cities.length; i++){
            var city = cities[i];
            var name = city.querySelector(".info-name").textContent;
            var expression = new RegExp(this.value, "i");
            if(!expression.test(name)){
                city.classList.add("invisible");
            } else{
                city.classList.remove("invisible");
            }
        }
    }else{
        for(var i = 0; i < cities.length; i++){
            var city = cities[i];
            city.classList.remove("invisible");
        }
    }
});