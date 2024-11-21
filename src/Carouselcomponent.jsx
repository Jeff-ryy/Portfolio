import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './Carousel.css';

const CarouselComponent = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={2000}
      transitionTime={600}
      dynamicHeight={false}
      swipeable={true}  // Enable swipeable for touch devices
      emulateTouch={true}  // Enable touch support for devices
      showArrows={true} // Optional: Remove arrows for a cleaner look
    >
      <div>
        <img src="/background.jpg" alt="Slide 1"
          className='image-gradient'
        />
      </div> 
      <div>
        <img src="/eat.jpg" alt="Slide 2"
          className='image-gradient'
        />
      </div>
      <div>
        <img src="/landscape.jpg" alt="Slide 3"
          className='image-gradient'
        />
      </div>
      <div>
        <img src="/dev.jpg" alt="Slide 3"
          className='image-gradient'
        />
      </div>
      <div>
        <img src="/wp.jpg" alt="Slide 3"
          className='image-gradient'
        />
      </div>

    </Carousel>
  );
};

export default CarouselComponent;
