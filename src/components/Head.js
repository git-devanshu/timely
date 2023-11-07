import Image from 'react-bootstrap/Image';

function FluidExample() {
  return (
    <div style={{position : 'absolute'}}>
        <Image src="./images/image3.jpg" fluid/>
        <div style={{fontFamily : 'initial', fontSize : '8vw', position : 'absolute', top : '15%', left : '5%', right : '35%', color : 'whitesmoke'}}>
            Monitor Your Precious Time
            <div style={{fontFamily : 'inherit', position : 'absolute', top : '100%', right : '15%', fontSize : '3vw', color : 'white'}}>Shop the Brand new collection of Smart Watches by Timely</div>
        </div>
    </div>
  );
}

export default FluidExample;