import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function GroupExample() {
  return (
    <div>
      <br/>
      <CardGroup>
      <Card>
        <Card.Img variant="top" src="./images/watch1.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>

      </Card>
      <Card>
        <Card.Img variant="top" src="./images/watch4.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Img variant="top" src="./images/watch3.png" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        
      </Card>
    </CardGroup>
    </div>
  );
}

export default GroupExample;