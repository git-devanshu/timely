import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <div>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="./images/watch5.png" fluid/>
        <Card.Body>
          <Card.Title>Timely Smart Calling Watch 4x-23</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/watch10.webp" />
        <Card.Body>
          <Card.Title>Timely Smart Calling Watch 5h-30</Card.Title>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/watch7.png" />
        <Card.Body>
          <Card.Title>Timely Smart Calling Watch 10g-12</Card.Title>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;