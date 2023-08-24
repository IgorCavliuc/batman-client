import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = ({ images }) => {
  return (
    <div>
      {/*<Carousel showArrows={true} showThumbs={false}>*/}
      {/*  {images.map((image, index) => (*/}
      {/*    <div key={index}>*/}
      {/*      <img src={image} alt={`Slide ${index}`} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</Carousel>*/}



      <div uk-slider>

        <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1">

          <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">



            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>

            ))}

          </ul>

          <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
          <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

        </div>

        <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

      </div>

    </div>
  );
};

export default CarouselComponent;
