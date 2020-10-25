import React from 'react';
import Proptypes from 'prop-types';
import "../../css/Maincard.css"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import Hashtag from '../crew/Hashtag'
import { NavLink } from 'react-router-dom'

function Crew({ idcrew, crewname, location, hashtags}) {
    return ( // onclick 으로 해당 detail 볼 수 있게 routing
        <NavLink to={`/crewdetail/${idcrew}`}>
        <div class="maincard">
            <Card>
                <CardImg top width="100%" style={{ maxWidth: 300, maxHeight: 150 }} src="https://gadam.s3.ap-northeast-2.amazonaws.com/gadam.png" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{crewname}</CardTitle>
                    <CardSubtitle>{location}</CardSubtitle>
                    <CardText>
                        {hashtags.map((id) => {
                            return <Hashtag
                                key={id.idhashtag}
                                id={id.idhashtag}
                                hashtag={id.title} />})}
                    </CardText>
                </CardBody>
            </Card>
        </div>
        </NavLink>
    )
}

Crew.propTypes = {
    "idcrew": Proptypes.number.isRequired,
    "crewname": Proptypes.string.isRequired,
    // "starttime": Proptypes.string.isRequired,
    "state": Proptypes.number.isRequired,
    // "exercises_idexercise": 7
}

export default Crew;