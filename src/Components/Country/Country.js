import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Country = (props) => {
    const {name,flag}=props.country;
    const history=useHistory();
    const handleClick=(countryName)=>{
        history.push(`/country/${countryName}`)
    }
    return (
            <div className="country-container d-flex justify-content-center col ">
                <Card  style={{width:'18rem',borderRadius:'5px', backgroundColor:'aqua',margin:'10px',border:'none',boxShadow: '2px 5px 4px #888888'}}>
                        <Card.Img variant="top" style={{borderTopLeftRadius:'5px',borderTopRightRadius:'5px'}} src={flag} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            {/* <Link to={`/country/${name}`}>Details</Link> */}
                            <Button onClick={()=>handleClick(name)} variant="danger">Details</Button>
                        </Card.Body>
                </Card>
           </div>
    );
};

export default Country;