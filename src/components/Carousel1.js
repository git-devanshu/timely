import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

function UncontrolledExample() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <div>
        <Image src="./images/slider1.jpg" style={{position : 'relative', left : '13%'}} fluid/>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div>
        <Image src="./images/slider2.jpg" style={{position : 'relative', left : '13%'}} fluid/>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default UncontrolledExample;