import React from 'react';
import Task from "./Task"

class TasksList extends React.Component {
  constructor(props){
    super(props);
  }

  addItem(event){
    event.preventDefault();
    let input = this.refs.itemInput.value;
    // console.log(this.props);
    this.props.onAddItem(input);
    this.refs.itemInput.value = '';
  }



  render(){
    let tasks;

  
    return(
      <div className="tasks-list col-sm-12 col-md-4 col-xs-12">

        <h2> Items </h2>
        <form className="form-inline create-task-form" onSubmit={this.addItem.bind(this)}>
          <div className="item-input col-lg-9 col-md-7 col-sm-7 col-xs-9 col-xxs-9" >
            <input type="text" ref="itemInput" placeholder="Type name here..." className="form-control" />
          </div>
            <input type="submit" ref='itemSubmit' value="Add new" className="btn btn-info col-lg-3 col-md-5 col-sm-5 col-xs-3 col-xxs-3 item-submit " />
        </form>

        {this.props.tasks.map(
          (task, i) =>
            { return <Task  key={i} id={i} active={task.active}
                                  content={task.content}
                                  comments={task.comments}
                                  onDeleteItem={this.props.onDeleteItem}
                                  onActivateTask = {this.props.onActivateTask}/>  }
        )}
      </div>
    )
  }
}

export default TasksList;
