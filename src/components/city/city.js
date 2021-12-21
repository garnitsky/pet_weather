import WeatherServices from "../../services/weatherServices"
const City = () => {

    const weatherServices = new WeatherServices();
    return (
        <div>
            {weatherServices.res}
        </div>
    )
}

export default City;