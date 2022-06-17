import Carousel from 'react-bootstrap/Carousel'
import image1 from '../assets/img/headerImage1.jpg'
import image2 from '../assets/img/headerImage2.jpg'
import image3 from '../assets/img/headerImage3.jpg'

export default function CarouselHeader() {
  return (
    <div className='Carousel'>
      <Carousel style={{ color: '#14213d', margin: '0 auto' }}>
              <Carousel.Item>
                <img className='d-block w-100' src={image2} alt='Third slide' />
      
                <Carousel.Caption
                  style={{
                    fontWeight: '200',
                    fontSize: '4vw',
                    color: 'white'
                  }}>
                  <h3 style={{ fontWeight: '400', fontSize: '6vw' }}>Reality PDX</h3>
                  <p>Portlands Largest Night Club</p>
                </Carousel.Caption>
              </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={image3} alt='Second slide' />

          <Carousel.Caption
            style={{
              fontWeight: '200',
              fontSize: '3vw',
              color: 'white'
            }}>
            <h3 style={{ fontWeight: '400', fontSize: '6vw' }}>VIP and Bottle Service</h3>
            <p>Make reservations tonight! </p>
          </Carousel.Caption>
        </Carousel.Item>
            <Carousel.Item>
              <img className='d-block w-100' src={image1} alt='First slide' />
              <Carousel.Caption
                style={{
                  fontWeight: '200',
                  fontSize: '4vw',
                  color: 'white'
                }}>
                <h3 style={{ fontWeight: '400', fontSize: '7vw' }}>Never Miss Out</h3>
                <p>Check our upcoming events!</p>
              </Carousel.Caption>
            </Carousel.Item>
      </Carousel>
    </div>
  )
}
