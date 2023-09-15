import './App.css';
import {useEffect, useState} from 'react';
import Axios from 'axios';
import Brewery from './components/Brewery';

function App() {
  const [listOfBreweries, setListOfBreweries ] = useState([]);
  const [searchWord, setSearchWord] = useState('San Diego')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
        Axios.get("https://api.openbrewerydb.org/v1/breweries?by_city=" + searchWord + "&per_page=3").then(
        (response) => {
          setListOfBreweries(response.data);
      })
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchWord]);
  
  return (
    <div className="App">
        <div className="breweryHeader">
          <h1>
            Check the breweries in
          </h1>
          <input 
            type="text" 
            placeholder='San Diego...'
            onChange={(event) => {
              setSearchWord(event.target.value)
            }}></input>
            <p>
              Photo by <a 
              href="https://unsplash.com/photos/zDlusnb3G3Q"
              target="blank">
                https://unsplash.com/photos/zDlusnb3G3Q
              </a>
              <br></br>
              Data by <a 
              href="https://www.openbrewerydb.org/"
              target="blank">
                Open Brewery DB API
              </a>
            </p>
        </div>
        <div className="breweryDisplay">{listOfBreweries.map((brewery) => {
          return <Brewery 
            name={brewery.name} 
            city={brewery.city} 
            website_url={brewery.website_url} 
            phone={brewery.phone}
            street={brewery.street}/>
        })}</div>
    </div>
  );
}

export default App;
