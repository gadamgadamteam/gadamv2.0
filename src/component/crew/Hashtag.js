import React from 'react'
import { Badge } from 'reactstrap';

function Hashtag({ id, hashtag }) {

    var colors = ["primrary", "success", "danger", "warning", "info", "dark", "light", "light",  "light",  "light",
    "light",  "light",  "light",  "light",  "light",  "light",  "light",  "light" ]  // 컬러 더 추가하기

    return (
    <Badge color={colors[id]}>{hashtag}</Badge>
    )
}

export default Hashtag