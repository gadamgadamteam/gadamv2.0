import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Completed({ idcrew, crewname, starttime, location }) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Col sm="2">
            <Card body>
                <CardTitle>{crewname}</CardTitle>
                <CardText>{location}</CardText>
                <CardText>{starttime}</CardText>
                <Button onClick={toggle}>후기작성</Button>
                <Modal isOpen={modal} toggle={toggle} className="modal-dialog">
                    <ModalHeader toggle={toggle}>{crewname} 크루</ModalHeader>
                    <ModalBody>
                        <label>
                            <div className='rating'>
                                <input type='radio' name='rating' id='rating-5' />
                                <input type='radio' name='rating' id='rating-4' />
                                <label htmlFor='rating-4' />
                                <input type='radio' name='rating' id='rating-3' />
                                <label htmlFor='rating-3' />
                                <input type='radio' name='rating' id='rating-2' />
                                <label htmlFor='rating-2' />
                                <input type='radio' name='rating' id='rating-1' />
                                <label htmlFor='rating-1' />
                            </div>
                        </label>
                        <label>
                            <textarea className='reviewTextArea' placeholder="리뷰를 남겨주세요!" defaultValue='' />
                        </label>
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