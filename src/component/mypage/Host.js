import React from 'react';
import Proptypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Host({ idcrew, crewname, starttime, location }) {
    return (
        <Col sm="2">
            <Card body>
                <CardTitle>{crewname}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>{starttime}</CardText>
                <Button>관리하기</Button>
            </Card>
        </Col>
    )
}

Host.propTypes = {
    "idcrew": Proptypes.number.isRequired,
    "crewname": Proptypes.string.isRequired,
    // "starttime": Proptypes.string.isRequired,
    // "exercises_idexercise": 7
}

export default Host;