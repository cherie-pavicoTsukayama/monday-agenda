import React from 'react';

export default class AddTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <div className="card">
        test
        <div>
          <button
            className="btn btn-primary"
            onClick={ this.props.onClick }
          >
            Done
          </button>
        </div>
      </div>
    )
  }
}
