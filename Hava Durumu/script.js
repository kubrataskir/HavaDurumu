const url = 'https://api.openweathermap.org/data/2.5/';
const key = 'b9f3fcc86ed3bc8e99a0d180ff5fbf39';

const setQuery = (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value) //fonksiyon tanımladık. şehir ismini göndererek çalışıyor
}

const getResult=(cityName)=>{
    let query=`${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
    .then(weather=>{
        return weather.json()
    })
    .then(displayResult)
}
const displayResult=(result)=>{
    let city=document.querySelector('.city')
    city.innerText=`${result.name},${result.sys.country}`

    let temp=document.querySelector('.temp')
    temp.innerText=`${Math.round(result.main.temp)}°C`

    let desc=document.querySelector('.desc')
    desc.innerText=result.weather[0].description

    let minmax=document.querySelector('.minmax')
    minmax.innerText=`${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
}

const searchBar = document.getElementById('searchBar'); //id=searchBar olana yeni searchBar değişkeni atıyoruz.
searchBar.addEventListener('keypress', setQuery);//dinleme işlemi yapıyoruz.enter tuşuna basıldığında şehir girilmiş olcak.
//onun için setQuery metodunu tanımladık(değişebilir)