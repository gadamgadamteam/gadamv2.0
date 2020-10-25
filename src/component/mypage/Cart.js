import React from 'react';
import Proptypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

function Cart({ idcrew, crewname, starttime, location }) {
    return (
        <Col style={{width:"max-content", display:"inline-block"}}>
            <Card body>
                <CardTitle>{crewname}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>{starttime}</CardText>
                <Button>상세정보</Button>
            </Card>
        </Col>
    )
}

Cart.propTypes = {
    "idcrew": Proptypes.number.isRequired,
    "crewname": Proptypes.string.isRequired,
    // "starttime": Proptypes.string.isRequired,
    // "exercises_idexercise": 7
}

export default Cart;