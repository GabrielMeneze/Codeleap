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
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure you want to delete this item?
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Button onClick={Delete}>YES</Button>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>CLOSE</Button>
            </Modal.Footer>

        </Modal>
    );
}
