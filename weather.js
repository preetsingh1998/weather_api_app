    
    class Weather{

    constructor(city){
        this.apiKey='e2bf7b5bb118405e95891627202406';
        this.city = city;
    }

    //fetch weather from api
    //e2bf7b5bb118405e95891627202406

    async getWeather(){
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}`);

        const responseData = await response.json();

        return responseData;

    }

    changeCity(city){

        this.city = city;

    }

} 