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

    const updateCity = (city) => {
        console.log(city)
        getWeather(city).then(onCityLoaded)
    }

    return (
        <div>
            <Formik
                initialValues={{
                    city: ''
                }}
                validationSchema={Yup.object({
                    city: Yup.string().required('This field is required')
                })}
                onSubmit={({ city }) => {
                    updateCity(city);
                    console.log(city);
                }}>
                <Form className="form">
                    <label htmlFor="city">Ведите название города</label>
                    <Field
                        id="city"
                        name="city"
                        type="text"
                        placeholder="Enter city name"
                    />
                    <button
                        type='submit'
                    >enter</button>
                </Form>
            </Formik>

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