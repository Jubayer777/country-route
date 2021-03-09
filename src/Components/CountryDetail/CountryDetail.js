import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Card} from 'react-bootstrap';

const CountryDetail = () => {
    const {countryName}=useParams();
    const [country,setCountry]=useState([]);
    useEffect(()=>{
          fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
          .then(res=>res.json())
          .then(data=>setCountry(data[0]))
    }, [countryName])
    const {name,flag,capital,region,population}=country;
    return (
        <div className="d-flex flex-column justify-content-center" style={{backgroundColor:'#BC8F8F'}}>
                <h1 className="d-flex justify-content-center mt-5">Details About {name}</h1>
                 <div className="d-flex justify-content-center" >
                        <Card  style={{ width: '30rem',borderRadius:'5px', backgroundColor:'#2F4F4F',color:'white',marginTop:'60px',marginBottom:'60px',border:'none',boxShadow: '2px 5px 4px #8FBC8F' }}>
                            <Card.Img variant="top" style={{borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} src={flag} />
                            <Card.Body>
                                <Card.Title>{name}</Card.Title>
                                <Card.Text>
                                    <p>Capital: {capital}</p>
                                    <p>Region: {region}</p>
                                    <p><small>Population: {population}</small></p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                 </div>
        </div>
        
    );
};

export default CountryDetail;