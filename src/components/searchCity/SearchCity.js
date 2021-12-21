import { Formik, Form, Field, ErrorMessage, useField } from 'formik';

import { useEffect, useState } from 'react';

import * as Yup from 'yup';
import useWeatherServices from '../../services/weatherServices';

const SearchCity = (props) => {

    const [city, setCity] = useState(null);

    const { getWeather } = useWeatherServices();

    useEffect(() => {
        updateCity();
    }, []);

    const onCityLoaded = (city) => {
        console.log('city', city)
        setCity(city);
    }

    const updateCity = () => {
        getWeather().then(onCityLoaded)
    }

    return (
        <div>
            <form className="form">
                <label htmlFor="name">Ведите название города</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                />
            </form>
            <button onClick={() => updateCity()}>enter</button>

            <div>город:{city}</div>
        </div>
    )
}

export default SearchCity;


//let n = 1000;
//let num = 1;
//for (let i = 0; i < num; i++) {
//    n = n / 2;
//    if (n > 50) {
//        num++;
//        console.log(num)
//    }
//    else {
//        console.log(num - 1);
//    }
//}