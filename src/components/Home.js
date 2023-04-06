import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'
import photo from '../images/photo.jpeg'
import photo1 from '../images/photo1.jpeg'
import photo2 from '../images/photo2.jpeg'
import photo3 from '../images/photo3.jpg'
import photo4 from '../images/photo4.jpg'
import photo5 from '../images/photo5.webp'
import photo6 from '../images/photo6.webp'
import photo7 from '../images/photo7.jpg'
import photo8 from '../images/photo8.jpeg'

const images = [photo, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]; 

function Home () {
  return (
    <>
   
    <Carousel>
  {images.map(image => (
    <Carousel.Item key={image}>
      <img
        src={image}
        alt="slide"
      />
      <Carousel.Caption>
        {/* <h3>Slide Label</h3>
        <p>Slide Description</p> */}
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>
    </>
  );
}

export default Home;