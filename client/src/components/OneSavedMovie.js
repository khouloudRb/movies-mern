import React from "react";
import { ListItem } from "./MovieList";
import Row from "./Row";
import Col from "./Col";

import styled from 'styled-components';

const StyledImg = styled.img`
  max-width: 50%;
`;

const StyledH3 = styled.h3`
  font-size: 50px;
  font-family: 'Grandstander', cursive;
`;

function Movie(props) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-12">
          <StyledH3 className="movie-title font-italic">{props.title}</StyledH3>
        </Col>
      </Row>
      <Row>
        <Col size="md-4" className="img-desc">
            <StyledImg className="img-thumbnail img-fluid w-100" src={props.src} alt={props.title} />
        </Col>
        <Col size="md-8" className="movie-info">
          <p className="movie-desc">{props.description}</p>
          <p className="author">Directed by: {props.director}</p>
          <p className="director">Genre: {props.genre}</p>
          <p className="released">Released on: {props.released}</p>
        </Col>
      </Row>
      <props.Button />
    </ListItem>
  );
}

export default Movie;