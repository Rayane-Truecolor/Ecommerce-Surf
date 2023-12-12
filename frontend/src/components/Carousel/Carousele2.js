import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function MyCarousel2() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 5
    }
  };

  return (
    
    <div className="echo">
        
    <>
      <h2 className="h2-carousel-populaire">Produit populaire</h2>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000} 
        className="my-custom-carousel"
      >
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 1" />
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 2" />
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 3" />
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 4" />
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 5" />
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 6" />
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 7" />
        <img src="https://dinopixel.com/preload/0123/Chimmy-profile-pic-.png" alt="Image 8" />
      </Carousel>
    </>
    </div>
  );
}

export default MyCarousel2;