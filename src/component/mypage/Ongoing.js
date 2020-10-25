import React from 'react';
import Proptypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Ongoing({ idcrew, crewname, starttime, location }) {
    return (
        <Col style={{width:"max-content", display:"inline-block"}}>
            <Card body>
                <CardTitle>{crewname}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>{starttime}</CardText>
                <Button>일정취소</Button>
            </Card>
        </Col>
    )
}

Ongoing.propTypes = {
    "idcrew": Proptypes.number.isRequired,
    "crewname": Proptypes.string.isRequired,
    // "starttime": Proptypes.string.isRequired,
    // "exercises_idexercise": 7
}

export default Ongoing;