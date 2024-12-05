import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);



    const handleSearch = async (searchTerm) => {
        try {
            const response = await axios.get(
                `https://api.weatherapi.com/v1/search.json?key=ff191ed1cbe746f8bf1180015240512&q=${searchTerm}`
            );
            setCities(response.data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    };


    const fetchData = async (searchTerm) => {
        try {
            const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=ff191ed1cbe746f8bf1180015240512&q=' + searchTerm + '&aqi=yes');
            setWeatherData(response.data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    const handleCityClick = (cityName) => {
        const selectedCityInfo = cities.find(city => city.name === cityName);
        setSelectedCity(selectedCityInfo);
        handleSearch(cityName);
        fetchData(cityName)
    };



    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Météo</h1>

            <input
                type="text"
                placeholder="Rechercher une ville..."
                onChange={(e) => handleSearch(e.target.value)}
            />

            {cities.length > 0 && (
                <ul>
                    {cities.map((city) => (
                        <li key={city.id} onClick={() => handleCityClick(city.name)}>
                            {city.name}, {city.region}, {city.country}
                        </li>
                    ))}
                </ul>
            )}

            {selectedCity && (
                <div style={{ marginTop: '20px' }}>
                    <h2>Ville sélectionnée :</h2>
                    <p>Nom : {selectedCity.name}</p>
                    <p>Région : {selectedCity.region}</p>
                    <p>Pays : {selectedCity.country}</p>
                </div>
            )}

            <div style={{ marginTop: '40px' }}>
                <h2>Informations météorologiques</h2>
                <pre>{JSON.stringify(weatherData, null, 2)}</pre>
            </div>
        </div>
    );
};

export default WeatherApp;
