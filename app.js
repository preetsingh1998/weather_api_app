const weather = new Weather('Sechelt');

const ui = new UI();

// weather.changeCity('toronto');


//get weather on dom load

document.addEventListener('DOMContentLoaded', getWeather);



//change loc
document.getElementById('w-change-btn').addEventListener('click',(e)=>{
    const city = document.getElementById('city').value;

    //change city
    weather.changeCity(city);


    //keep it in local storage
    storage.setLocationData(city);

    //get weather
    getWeather();

    clearcity();
    //close modal
    $('#locModal').modal('hide');

}
);

function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
            console.log(results);
        }).catch(err => {
            console.log(err);
        });

}

function clearcity(){
    const city = document.getElementById('city');

    city.value = '';
}