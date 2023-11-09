import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Image from 'react-bootstrap/Image';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{height : '50px', width : '100vw', backgroundColor : 'black'}}>
      <Button style={{height : '48px', width : '36px', position : 'absolute', top : '0px', right : '12px', color : 'black', backgroundColor : 'white', fontSize : '20px', rotate : '90deg'}} onClick={handleShow}>
        |||
      </Button>
      <Image src="./images/logotimely.jpg" style={{height : '36px', position: 'absolute', top : '8px', left : '10px'}}/>
      <Image src="./images/login2.png" style={{height : '36px', position: 'absolute', top : '8px', left : '120px'}}/>

      <Offcanvas data-bs-theme="dark" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title style={{fontSize : '40px'}}>Timely</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div style={{fontSize : '26px'}}>
            <a href='#' style={{textDecoration : 'none', color : 'whitesmoke'}}>Home</a><br/>
            <a href='#' style={{textDecoration : 'none', color : 'whitesmoke'}}>Features</a><br/>
            <a href='#' style={{textDecoration : 'none', color : 'whitesmoke'}}>Shop Now</a><br/>
            <a href='#' style={{textDecoration : 'none', color : 'whitesmoke'}}>About</a><br/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Example;