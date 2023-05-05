import React from "react";
import "./Toogle.css"
class ToggleButton extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.isToggleOn ? "\u2714" : "\u2716"}
      </div>
    );
  }
}

export default ToggleButton