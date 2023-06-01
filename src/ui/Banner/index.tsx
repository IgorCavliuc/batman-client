import "./stytle.scss";
import { Button } from "../";
const AvatarBanner = require("../img/litlle-batman.png");
const TeamIco = require("../img/comand.png");
const OfficeManIco = require("../img/avatar-man.png");
const WhiteArrowIco = require("../img/white-arrow.svg").default;

const Banner = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-touch="true"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <div className="batman-store__banner w-100">
            <div className="batman-store__banner_container">
              <h3>Artificial Intelligence for Marketing</h3>
              <p>
                Learn how artificial intelligence is reshaping the way marketing
                is done at both large and small organizations.
              </p>
              <Button>Learn now</Button>
            </div>
            <img src={AvatarBanner} alt="AvatarBanner" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="batman-store__banner batman-store__banner--orange  w-100">
            <div className="batman-store__banner_container">
              <h3>Artificial Intelligence for Marketing</h3>
              <p>
                Learn how artificial intelligence is reshaping the way marketing
                is done at both large and small organizations.
              </p>
              <Button>Learn now</Button>
            </div>
            <img src={TeamIco} alt="TeamIco" />
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <div className="batman-store__banner batman-store__banner--yellow w-100">
            <div className="batman-store__banner_container">
              <h3>Artificial Intelligence for Marketing</h3>
              <p>
                Learn how artificial intelligence is reshaping the way marketing
                is done at both large and small organizations.
              </p>
              <Button>Learn now</Button>
            </div>
            <img src={OfficeManIco} alt="AvatarBanner" />
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">
          <img
            src={WhiteArrowIco}
            alt="WhiteArrowIco"
            style={{ transform: "rotate(180deg)", width: "20px" }}
          />
        </span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">
          <img
            src={WhiteArrowIco}
            alt="WhiteArrowIco"
            style={{ width: "20px" }}
          />
        </span>
      </button>
    </div>

    // <div id="carouselExample" className="carousel slide carousel-fade">
    //   <div className="carousel-inner">
    // <div className="carousel-item active" data-interval="10000">
    //   <div className="batman-store__banner w-100">
    //     <div className="batman-store__banner_container">
    //       <h3>Artificial Intelligence for Marketing</h3>
    //       <p>
    //         Learn how artificial intelligence is reshaping the way marketing
    //         is done at both large and small organizations.
    //       </p>
    //       <utton>Learn now</utton>
    //     </div>
    //     <img src={AvatarBanner} alt="AvatarBanner" />
    //   </div>
    // </div>
    // <div className="carousel-item" data-interval="2000">
    //   <div className="batman-store__banner batman-store__banner--orange  w-100">
    //     <div className="batman-store__banner_container">
    //       <h3>Artificial Intelligence for Marketing</h3>
    //       <p>
    //         Learn how artificial intelligence is reshaping the way marketing
    //         is done at both large and small organizations.
    //       </p>
    //       <utton>Learn now</utton>
    //     </div>
    //     <img src={TeamIco} alt="TeamIco" />
    //   </div>
    // </div>
    // <div className="carousel-item">
    //   <div className="batman-store__banner batman-store__banner--yellow w-100">
    //     <div className="batman-store__banner_container">
    //       <h3>Artificial Intelligence for Marketing</h3>
    //       <p>
    //         Learn how artificial intelligence is reshaping the way marketing
    //         is done at both large and small organizations.
    //       </p>
    //       <utton>Learn now</utton>
    //     </div>
    //     <img src={OfficeManIco} alt="AvatarBanner" />
    //   </div>
    // </div>
    //   </div>
    //   <utton
    //     className="carousel-control-prev"
    //     type="utton"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="prev"
    //   >
    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Previous</span>
    //   </utton>
    //   <utton
    //     className="carousel-control-next"
    //     type="utton"
    //     data-bs-target="#carouselExample"
    //     data-bs-slide="next"
    //   >
    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //     <span className="visually-hidden">Next</span>
    //   </utton>
    // </div>
  );
};

export default Banner;
