import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';

const CountryDetail = () => {
    const {countryName}=useParams();
    const [country,setCountry]=useState([]);
    useEffect(()=>{
          fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
          .then(res=>res.json())
          .then(data=>setCountry(data[0]))
    }, [])
    const {name,flag,capital,region,population}=country;
    return (
        
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={flag} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Capital: {capital}</p>
                    <p>Region: {region}</p>
                    <p><small>Population: {population}</small></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CountryDetail;