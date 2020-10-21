import React from 'react'
import { Router, Switch, Route, NavLink } from 'react-router-dom'
import '../../css/Extype.css'

function Exercisetype({ idexercise, type, imgexercise }) {
    return (
        <NavLink to={`/crewlist/${idexercise}`}>
            <div className="extype" id="border">
                <img style={{ width: 100, height: 100 }} src={imgexercise}></img>
                <b className="sportsname">{type}</b>
            </div>
        </NavLink>
    )
}

export default Exercisetype