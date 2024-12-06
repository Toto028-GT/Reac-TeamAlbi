import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const App = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [cities, setCities] = useState([]);

    useEffect(() => {
        fetchData('Albi');
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
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ff191ed1cbe746f8bf1180015240512&q=${searchTerm}&days=7&aqi=no&alerts=no`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    const handleCityClick = (cityName, cityRegion) => {
        const selectedCityInfo = cities.find(city => city.name === cityName && city.region === cityRegion);
        handleSearch(`${cityName} ${selectedCityInfo.region}`);
        fetchData(`${cityName} ${selectedCityInfo.region}`);
    };

    return (
        <div style={{
            padding: '80px',
            backgroundColor: '#304687',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 0
        }}>
            <BlocGlobalGauche weatherData={weatherData} />
            <BlocGlobalDroit
                handleSearch={handleSearch}
                cities={cities}
                handleCityClick={handleCityClick}
            />

            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                height: '39vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                borderTop: '4px solid white',
                backgroundColor: '#4A67BF'
            }}>
                {Array(7).fill(null).map((_, index) => (
                    <BlocsMeteo
                        key={index}
                        weatherData={weatherData}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

const BlocGlobalGauche = ({ weatherData }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 65,
            left: 10,
            width: '49%',
            height: '60%',
            borderRadius: '40px',
            backgroundColor: '#4A67BF',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1>{weatherData?.location.name}, {weatherData?.location.region}, {weatherData?.location.country}</h1>
            <p>{weatherData?.current.temp_c}</p>
            <img src={`https:${weatherData?.current.condition.icon}`} alt="Icone météo" />
        </div>
    )
}

BlocGlobalGauche.propTypes = {
    weatherData: PropTypes.object
};

const BlocGlobalDroit = ({ handleSearch, cities, handleCityClick }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 65,
            right: 10,
            width: '49%',
            height: '60%',
            borderRadius: '40px',
            backgroundColor: '#4A67BF',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <input
                type="text"
                placeholder="Rechercher une ville..."
                onChange={(e) => handleSearch(e.target.value)}
                style={{
                    width: '80%',
                    padding: '10px',
                    fontSize: '16px',
                    marginBottom: '20px'
                }}
            />

            {cities.length > 0 && (
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {cities.map((city) => (
                        <li
                            key={city.id}
                            onClick={() => handleCityClick(city.name, city.region)}
                            style={{
                                cursor: 'pointer',
                                padding: '5px',
                                borderBottom: '1px solid white'
                            }}
                        >
                            {city.name}, {city.region}, {city.country}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

BlocGlobalDroit.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    cities: PropTypes.arrayOf(PropTypes.object),
    handleCityClick: PropTypes.func.isRequired
};

const BlocsMeteo = ({ weatherData, index }) => {
    const dayData = weatherData?.forecast.forecastday[index];

    if (!dayData || !dayData.day || !dayData.day.condition) {
        return <div>No data available for this day</div>;
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '20px',
            border: '3px solid #000000',
            borderRadius: '30px',
            backgroundColor: '#4A67BF'
        }}>
            <p>JOUR {index + 1}</p>
            <img
                src={`https:${dayData.day.condition.icon}`}
                alt={`Condition météo pour jour ${index + 1}`}
            />
            <p>{dayData.day.avgtemp_c}°C</p>
        </div>
    );
};

BlocsMeteo.propTypes = {
    weatherData: PropTypes.object,
    index: PropTypes.number.isRequired
};

export default App;
