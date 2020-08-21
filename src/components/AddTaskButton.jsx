import React from 'react';

export default class AddTaskButton extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary"
          onClick={this.props.onClick}
        >
          Add Task
        </button>
      </div>
    )
  }
}
