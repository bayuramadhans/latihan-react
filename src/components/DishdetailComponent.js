import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}) {
        if (dish != null){
          return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
          );
        }
        else{
          return(
              <div></div>
          );
        }
    }
    function RenderComments({comments}) {
        if (comments != null){
            var commentRender = comments.map((comment)=>{
              return(
                  <ul id={comment.id} className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                  </ul>
              );
            });
            return(
              <div>
                <h4>Comments</h4>
                {commentRender}
              </div>
            );
        }else{
          return(
              <div></div>
          );
        }

    }

    const  DishDetail = (props) => {
        if(props.selectedDish != null){
          return(
            <div className="container">
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  <RenderDish dish={props.selectedDish} />
                </div>
                <div  className="col-12 col-md-5 m-1">
                  <RenderComments comments={props.selectedDish.comments} />
                </div>
              </div>
            </div>
          );
        }else{
          return(
            <div></div>
          );
        }

    }

export default DishDetail;
