import React from "react";
import { ListItem } from "./MovieList";
import Row from "./Row";
import Col from "./Col";

function Movie(props) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="movie-title font-italic">{props.title}</h3>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="author">Directed by {props.director}</p>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="director">Genre {props.genre}</p>
        </Col>
        <Col size="md-6">
          <p className="released">Released on {props.released}</p>
        </Col>
      </Row>
      <Row>
        <div className="img-desc">
          <Col size="12 sm-4 md-2">
            <img className="img-thumbnail img-fluid w-100" src={props.src} alt={props.title} />
          </Col>
          <Col size="12 sm-8 md-10">
            <p className="movie-desc">{props.description}</p>
          </Col>
        </div>
      </Row>
      <props.Button />
    </ListItem>
  );
}

export default Movie;