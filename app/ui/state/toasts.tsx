import React, { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ToastShowcase () {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <> 
            <Button variant='primary' onClick={handleShow}> Launch Modal </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>

                <Modal.Body> Hi from the modal </Modal.Body>
                <Modal.Footer>
                    <Button variant='secondary' onClick={handleClose} > close </Button>
                    <Button variant='primary' onClick={handleClose} >save changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ToastShowcase;