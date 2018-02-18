import React from 'react';

const Comment = ({id, content}) => {
  return (
    <div className="comment row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 avatar-space"> <div className={(id%2==0 ? "orange-avatar" : "blue-avatar")} /></div>
      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 " > <p> {content} </p> </div>
    </div>


  )
}

export default Comment;
