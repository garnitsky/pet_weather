import './mainPaige.css';
import WeatherDay from '../weatherDay/WeatherDay';
import WeatherWeek from '../weatherWeek/WeatherWeek';
import SearchCity from '../searchCity/SearchCity';
import City from '../city/city';

const MainPaige = () => {
    return (
        <div className="main_paige">
            <h2>Выберите город</h2>
            <SearchCity />
            <div>
                <WeatherDay />
                <WeatherWeek />
                {/*<City />*/}
            </div>
        </div>
    )
}

export default MainPaige;