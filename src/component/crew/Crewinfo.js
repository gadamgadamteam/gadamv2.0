import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Badge, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import Hashtag from './Hashtag'

function Crewinfo({idcrew, starttime, crewname, hashtags, state}) {
    return (
        <div>
            <ListGroup horizontal className="w-75 justify-content-between">
                {/* <h1>hi +{starttime}</h1> */}
                <h3 className="justify-content-between">
                    {starttime}
                </h3>
                <div>
                    <h2 className="justify-content-between">
                        {crewname}
                    </h2>
                    <h5 className="justify-content-between">
                        <div>{hashtags.map((id) => {
                            return <Hashtag
                                key={id.idhashtag}
                                id={id.idhashtag}
                                hashtag={id.title} />
                        })}</div>
                    </h5>
                </div>
                <Button>
                    {state}
                </Button>
            </ListGroup>
        </div>
    )
}

export default Crewinfo