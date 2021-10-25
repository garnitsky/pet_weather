class WeatherServices {

    _apiBase = 'http://api.openweathermap.org/data/2.5/weather?id=';
    _apiKey = '&appid=d1fca4765e13eb8b49b9950a969ed7ec';
    cityId = 703448;

    getResurce = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    getWeather = async () => {
        const res = await this.getResurce(`${this._apiBase}${this.cityId}${this._apiKey}`);
        console.log(res);
        return res;
    }

}


export default WeatherServices;


// {
//        "id": 703448,
//        "name": "Kyiv",
//        "state": "",
//        "country": "UA",
//        "coord": {
//            "lon": 30.516666,
//            "lat": 50.433334
//        }