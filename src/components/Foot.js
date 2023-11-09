import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

function HeaderAndFooterExample() {
  return (
    <div style={{fontSize : '21px'}} data-bs-theme="dark">
    <Card className="text-center">
      <Card.Header>Timely - Smart Watches</Card.Header>
      <Card.Body>
        <Card.Title><Image src='./images/social.png' style={{maxHeight :'35px'}} fluid/></Card.Title>
        <Card.Text>
          Features      About<br/>
          Contact Us    Shop<br/>
        </Card.Text>
        <Button variant="secondary">Login</Button>
      </Card.Body>
      <Card.Footer className="text-muted" style={{fontSize : '14px'}}>Copyright 2023 Timely</Card.Footer>
    </Card>
    </div>
  );
}

export default HeaderAndFooterExample;