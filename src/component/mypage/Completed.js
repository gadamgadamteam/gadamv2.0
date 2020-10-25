import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactStars from 'react-stars'
import { TextField } from '@material-ui/core'

function Completed({ idcrew, crewname, starttime, location }) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }

    return (
        <Col style={{width:"max-content", display:"inline-block"}}>
            <Card body>
                <CardTitle>{crewname}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>{starttime}</CardText>
                <Button onClick={toggle}>후기작성</Button>
                <Modal isOpen={modal} toggle={toggle} className="modal-dialog">
                    <ModalHeader toggle={toggle}>{crewname} 크루</ModalHeader>
                    <ModalBody>
                        <ReactStars 
                            count={5}
                            onChange={ratingChanged}
                            size={50}
                            color2={'#ffd700'} />
                        <TextField
                            fullWidth="true"
                            id="standard-multiline-static"
                            label="후기작성"
                            multiline
                            rows={5}
                            placeholder="후기를 작성해주세요"/>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>작성완료</Button>{' '}
                        <Button color="secondary" onClick={toggle}>취소하기</Button>
                    </ModalFooter>
                </Modal>
            </Card>
        </Col>
    )
}

Completed.propTypes = {
    "idcrew": Proptypes.number.isRequired,
    "crewname": Proptypes.string.isRequired,
    // "starttime": Proptypes.string.isRequired,
    // "exercises_idexercise": 7
}

export default Completed;