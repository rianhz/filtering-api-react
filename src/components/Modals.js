import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const Modals = ({ show, handleClose, details }) => {
  const detail = [];
  detail.push(details);
  console.log(detail);
  return (
    <>
      {detail.map((el, i) => {
        return (
          <Modal show={show} onHide={handleClose} key={i}>
            <Modal.Header closeButton>
              <Modal.Title>
                {el.restaurant_name} - {el.rating} Stars
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='wrapper-modals'>
                <div className='left-modals'>
                  <img src={el.image} alt='imagez' />
                </div>
                <div className='right-modals'>
                  <p>{el.rating} Stars</p>
                  <p>{el.desc}</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={handleClose}>
                Close
              </Button>
              <Button variant='primary' onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        );
      })}
    </>
  );
};

export default Modals;
