const useWeatherServices = () => {

    const _apiBase = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const _apiKey = '&appid=d1fca4765e13eb8b49b9950a969ed7ec';
    const city = 'Kyiv';

    const getResource = async (url) => {
        let res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }
        return await res.json();
    }

    const getWeather = async (city = 'Kyiv') => {
        const res = await getResource(`${_apiBase}${city}${_apiKey}`);
        console.log(res.name);
        return res.name;
    }

    //const transformAPI = (api) => {
    //    return {
    //        name: api.name
    //    }
    //}

    return { getWeather }

}

export default useWeatherServices;


// {
//        "id": 703448,
//        "name": "Kyiv",
//        "state": "",
//        "country": "UA",
//        "coord": {
//            "lon": 30.516666,
//            "lat": 50.433334
//        }