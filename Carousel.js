import React from "react";

function Carousel(props) {
  return (
    <div id={props.id} className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {props.slides.map((slide, index) => (
          <li
            key={index}
            data-target={`#${props.id}`}
            data-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></li>
        ))}
      </ol>

      <div className="carousel-inner">
        {props.slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img src={slide.image} className="d-block w-100" alt={slide.alt} />
            <div className="carousel-caption">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <a
        className="carousel-control-prev"
        href={`#${props.id}`}
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href={`#${props.id}`}
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
