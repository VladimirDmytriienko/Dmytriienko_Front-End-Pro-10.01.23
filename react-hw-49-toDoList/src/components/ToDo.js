import React from "react";
import ToggleButton from "./Toogle/Toogle";
import "./ToDo.css"

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.tasks = [];
  }
  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.tasks.push(this.state.message)
    console.log('Message: ', this.state.message);
    this.setState({ message: '' });
  }
  renderTasks = () => {
    return this.tasks.map((i) => {
      return <p className="task">{i} <ToggleButton /></p>;
    });
  }
  render() {
    return (
      <div>
        {this.renderTasks()}
        <form onSubmit={this.handleSubmit}>
          <input  value={this.state.message} onChange={this.handleMessageChange}/>
          <button type="submit">Добавить</button>
        </form>
      </div>
     
    );
  }
}

export default ToDo;
