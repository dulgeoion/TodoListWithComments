import React from 'react';
import Comment from './Comment';

class Comments extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue : ''
    }
  }

  addComment(event){

    if (event.key === "Enter" && this.refs.commentInput.value != '' ){
      this.props.onAddComment(this.props.id, this.refs.commentInput.value);
      this.refs.commentInput.value = '';
    }

  }
  render(){
    const id = this.props.id;
    return(
      <div className="commentsbar contaner-fluid col-sm-12 col-md-5 col-xs-12">
        <h2> Comments # {id+1} </h2>
        <div className="commentsList container-fluid" >
            { this.props.task.comments.map((comment, i) =>{
              return  <Comment key={i} id={i} content = {comment}   />
            }) }
          </div>
          <div className="row commentInput container-fluid">
          <div className="avatar-space col-xs-2 col-sm-2 col-md-2 col-lg-2"> <div className="silver-avatar" /> </div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10"> <textArea ref="commentInput" onKeyPress={this.addComment.bind(this)} /> </div>
          </div>

      </div>
    )
  }
}

export default Comments;
