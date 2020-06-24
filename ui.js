class UI {

    constructor(){
        this.location = document.getElementById('w-location');
        this.region = document.getElementById('w-region');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelslike = document.getElementById('w-feels-like');
        this.rain = document.getElementById('w-rain');
        this.wind = document.getElementById('w-wind');
        this.time = document.getElementById('w-time');
        this.box =document.getElementById('box');
        this.light = document.getElementById('light');
    }

    paint(weather){

        this.day = weather.current.is_day;
       
        if(this.day===1){
            this.box.className="col-md-6 mx-auto text-center bg-primary mt-5 p-5 rounded";
            this.light.setAttribute('src','img/sun.png');

        }else{
            this.box.className="col-md-6 mx-auto text-center bg-secondary mt-5 p-5 rounded";
            this.light.setAttribute('src','img/moon.png');
        }
        

        this.location.textContent = weather.location.name;
        this.desc.textContent = weather.current.condition.text;
        this.region.textContent = weather.location.region;
        this.string.textContent = weather.current.temp_c+"°C";
        this.icon.setAttribute('src',weather.current.condition.icon);
        this.humidity.textContent= `Relative Humidity: ${weather.current.humidity}`;
        this.feelslike.textContent= `Feels Like: ${weather.current.feelslike_c+"°C"}`;
        this.wind.textContent= `Wind: ${weather.current.wind_kph} km/h`;
        this.rain.textContent= `Wind: ${weather.current.precip_mm} mm`;
        this.time.textContent= `${weather.location.localtime}`;

    }

}