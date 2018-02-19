import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import './responsive.css'
import LogoBar from "./Components/LogoBar";
import TasksList from './Components/TasksList';
import Comments from './Components/Comments';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    };
  }


  onAddItem(content){
    this.taskSetFalse();
    this.setState({
      tasks: this.state.tasks.concat({content: content, comments: [], active: true})
    });
  }

  onDeleteItem(id) {
    this.taskSetFalse();
    let tasksArray = this.state.tasks;
    tasksArray.splice(id, 1);
    this.setState({
      tasks: tasksArray
    });

  }

  onActivateTask(id){
      this.taskSetFalse();
      let tasksArray = this.state.tasks;
      tasksArray[id].active = true;
      this.setState({ tasks: tasksArray });

  }

  onAddComment(id, comment){
    let updateTasks = this.state.tasks
    updateTasks[id].comments.push(comment);
    this.setState({tasks: updateTasks});

    }

  taskSetFalse(){
    this.setState({
      tasks: _.map(this.state.tasks, (task) => {
                task.active = false;
                return task })
    });
  }

  fetchData(){

  }

  componentWillMount(){
    localStorage.getItem("tasks") && this.setState({
      tasks: JSON.parse(localStorage.getItem("tasks"))
    });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("tasks", JSON.stringify(nextState.tasks));
  }

  render(){
    let activeTasksFiltered = _.filter(this.state.tasks, "active");

    let comments;
    if (activeTasksFiltered[0]){
       comments =   <Comments id = {this.state.tasks.indexOf(activeTasksFiltered[0])}
                task = {activeTasksFiltered[0]}
                onAddComment = {this.onAddComment.bind(this)}/>
    }else{
      comments = "";
    }

    return(
      <div className="container-fluid" >
        <div className="row app-row">
          <LogoBar />
          <TasksList tasks = {this.state.tasks}
                     onAddItem={this.onAddItem.bind(this)}
                     onDeleteItem={this.onDeleteItem.bind(this)}
                     onActivateTask = {this.onActivateTask.bind(this)} />
          {comments}

        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
