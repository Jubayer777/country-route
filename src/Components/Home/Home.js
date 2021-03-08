import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
          fetch('https://restcountries.eu/rest/v2/all')
          .then(res=>res.json())
          .then(data=>setCountries(data))
    }, [])
    return (
        <div className="d-flex flex-column justify-content-center" style={{backgroundColor:'#FAF0E6'}}>
            <h1 className="d-flex justify-content-center mt-5">Total Country: {countries.length}</h1>
            <div className="row d-flex justify-content-center mt-5">
                {
                    countries.map(country=><Country country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Home;