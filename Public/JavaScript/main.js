const cityName = document.getElementById("cityName");
const searchButton = document.getElementById("searchButton");

const cityData = document.getElementById("location");
const current_temp = document.getElementById("current_temp");
const current_status = document.getElementById("current_status");

const dataHide = document.querySelector(".temp_status");


async function getWeatherInfo(event) {
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal == ""){
        cityData.innerText = "Plz enter the city name before search...";
        dataHide.classList.add("data_hide");
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c983d7bfea1914fde66395d91ef957fa`;
            const response = await fetch(url);

            const jsonData = await response.json();
            const arrData = [jsonData];

            cityData.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;

            const floorData = Math.floor(arrData[0].main.temp);
            current_temp.innerText = `${floorData}° C`;

            current_status.innerText = arrData[0].weather[0].main;
            
            // const tempStatus = arrData[0].weather[0].main;
            // if(tempStatus == "Sunny"){
            //     current_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            // }
            // else if(tempStatus == "Clouds"){
            //     current_status.innerHTML = "<i class='fas fa-cloud' style='color: #dfe4ea;'></i>";
            // }
            // else if(tempStatus == "Rainy"){
            //     current_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            // }
            // else if(tempStatus == "Haze"){
            //     current_status.innerHTML = "<i class='fas fa-cloud-sun' style='color: #44c3de;'></i>";
            // }
            // else {
            //     current_status.innerHTML = "Clear";
            // }

            dataHide.classList.remove("data_hide");
        }
        catch{
            cityData.innerText = "Plz enter the right city name...";
            dataHide.classList.add("data_hide");
        }
    }
}

searchButton.addEventListener("click" , getWeatherInfo);