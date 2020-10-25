import React from 'react';
import Proptypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Host({ idcrew, crewname, starttime, location }) {
    return (
        <Col style={{width:"max-content", display:"inline-block"}}>
            <Card body>
                <CardTitle>{crewname}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>{starttime}</CardText>
                <Button>활동완료</Button>
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