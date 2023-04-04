import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import { useEffect, useState } from "react";

const CommentsList = props => (
  <ListGroup>
    {props.comments.map(comment => (
      <SingleComment key={comment._id} comment={comment} />
    ))}
  </ListGroup>
);

export default CommentsList;
