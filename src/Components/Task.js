import React from 'react';

class Task extends React.Component {
  constructor(props){
    super(props);
  }


  deleteTask(event){
    event.preventDefault();
    this.props.onDeleteItem(this.props.id);
  }
  activateTask(event) {
    event.preventDefault();
    this.props.onActivateTask(this.props.id);

  }

  render(){
    let activeClass = this.props.active? "active" : "";

      return (
        <div className={activeClass} >
          <div className='item row ' >
            <h5 className="col-xs-10 col-sm-9 col-md-9 col-lg-10" onClick={this.activateTask.bind(this)}>
              {this.props.content}
              <span className="badge badge-pill badge-info comments-counter">{this.props.comments.length}</span>
            </h5>
            <input type="button" value="Delete" onClick={this.deleteTask.bind(this)} className="col-xs-2 col-sm-3 col-md-3 col-lg-2 btn btn-default delete-btn"  />
          </div>
        </div>
      );
      }
  }

export default Task;
