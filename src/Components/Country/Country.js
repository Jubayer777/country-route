import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Country.css';
const Country = (props) => {
    const {name,flag,capital,region,population}=props.country;
    return (
            <div>
                <Card className="country-container" style={{width:'18rem'}}>
                        <Card.Img variant="top" className="card-img" src={flag} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            
                            <Link to={`/country/${name}`}>Details</Link>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                </Card>
           </div>
    );
};

export default Country;