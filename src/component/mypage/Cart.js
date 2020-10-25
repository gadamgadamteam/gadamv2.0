import React from 'react';
import Proptypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom'

function Cart({ idcrew, crewname, starttime, location }) {
    return (
        <Col style={{ width: "max-content", display: "inline-block" }}>
            <Card body>
                <CardTitle>{crewname}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>{starttime}</CardText>
                <NavLink to={`/crewdetail/${idcrew}`}>
                    <Button style={{width:"-webkit-fill-available"}}>상세정보</Button>
                </NavLink>
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