import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import Delete from '../../Pages/Home/MainScreen'

export default function ModalDelete(props) {
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{ fontFamily: "Questrial" }}
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    DELETE THE POST
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    are you sure?
                </p>
                <Button onClick={Delete}>YES</Button>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>CLOSE</Button>
            </Modal.Footer>
        </Modal>
    );
}
