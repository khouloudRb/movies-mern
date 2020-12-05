import React from "react";
import MovieDetail from "./MovieDetail";
import Row from "./Row";
import Col from "./Col";
// import Card from "./Card";
// import "./style.css";


function Movie({ title, imageUrl }) {
    console.log(title, imageUrl);
    return (
      <MovieDetail>
        <Row className="flex-wrap-reverse">
          <Col size="md-8">
            <h3 className="movie-title font-italic">{title}</h3>
          </Col>
        </Row>
        {/* <Row>
          <Col size="md-6">
            <p className="author">Written by {authors}</p>
          </Col>
        </Row>
        <Row>
          <div className="img-desc">
            <Col size="12 sm-4 md-2">
              <img className="img-thumbnail img-fluid w-100" src={image} alt={title} />
            </Col>
            <Col size="12 sm-8 md-10">
              <p className="movie-desc">{description}</p>
            </Col>
          </div>
        </Row> */}
        <Col size="md-4">
          <div className="btn-container">
            <a 
            className="view-btn" target="_blank" rel="noopener noreferrer" href={imageUrl}>
              View
            </a>
            {/* <Button /> */}
          </div>
        </Col>
      </MovieDetail>
    );
  }

export default Movie;