import { useState } from 'react';
import './App.css';
import axios from "axios";
const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';

function App() {
  const [filterCityText, setFilterCityText] = useState('');
  const [APIcities, setAPIcities] = useState([]);
  const optionsForFilterText = (text) => {
    const options = {
      method: 'GET',
      url: `${url}`,
      headers: {
        'x-rapidapi-key': `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
      },
      params: {
        countryIds: 'US',
        namePrefix: `${text}`
      }
    };
    return options;
  };
  const setFilter = (event) => {
    const text = event.target.value;
    setFilterCityText(text);
    const options = optionsForFilterText(text);
    if (filterCityText !== '') {
      axios.request(options)
        .then(function (response) {
          console.log(`API call made ${Date()}`);
          const [city1, city2, city3, city4, city5] =
            [response.data.data[0].city + ' ' + response.data.data[0].regionCode,
            response.data.data[1].city + ' ' + response.data.data[1].regionCode,
            response.data.data[2].city + ' ' + response.data.data[2].regionCode,
            response.data.data[3].city + ' ' + response.data.data[3].regionCode,
            response.data.data[4].city + ' ' + response.data.data[4].regionCode
            ]; // TODO Cleanup
          setAPIcities([city1, city2, city3, city4, city5])
        })
        .catch(function (error) {
          console.error(error);
        })
    };
    if (filterCityText === '') setAPIcities([]);
    console.log(APIcities);
  }
  return (
    <div className="App">
      <header className="App-header">
      Enter City name<br/><br/>
        <input name="city" value={filterCityText} onChange={setFilter} />
        Searched Cities<br />
        <div id="cities">
          {APIcities.map((city, idx) => <div key={idx}> {city} </div>)}
        </div>
      </header>
    </div>
  );
}
export default App;