import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios";
const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities';



function App() {
  const [filterCityText, setFilterCityText] = useState('');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      const options = {
          method: 'GET',
          url: `${url}`,
          headers: {
            'x-rapidapi-key': `${process.env.REACT_APP_X_RAPIDAPI_KEY}`,
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com'
          },
          params: {
            countryIds: 'US',
            namePrefix: `${filterCityText}`
          }
      };
      try{
        const response = await axios.request(options);
        setCities(response.data.data);
      }catch(e){
        console.error('error occured ==> ', e);
        alert('error occured, please check browser console');
      }
    }
    if(filterCityText){
      getCities();
    }else{
      setCities([]);
    }
    
  }, [filterCityText])
  
  const setFilter = (event) => {
    const text = event.target.value;
    setFilterCityText(text);
  }
  return (
    <div className="App">
      <header className="App-header">
      Enter City name<br/><br/>
        <input name="city" value={filterCityText} onChange={setFilter} />
        Searched Cities<br />
        <div id="cities">
          {cities.map(({city, id}) => <div key={id}> {city} </div>)}
        </div>
      </header>
    </div>
  );
}
export default App;