import React from 'react';

export default class AddTaskModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: {}
    }
    console.log(this.props.boardData);
  }

  display() {
    if (this.props.boardData === null) {
      return <p>props board data is null</p>
    } else {
      const boards = this.props.boardData.boards;
      console.log(boards);
      return (

        <div className="card container m-4 p-4">
          <div className="card-header">
            <h5 class="mb-0">
              <button
                className="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne">
                {this.props.boardData.boards[0].name}
              </button>
            </h5>
          </div>
          <div id="collapseOne"
            className="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion">
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Person</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{boards[0].items[0].name}</td>
                  <td>{boards[0].items[0].column_values[0].text}</td>
                  <td>{boards[0].items[0].column_values[1].text}</td>
                  <td>{boards[0].items[0].column_values[2].text}</td>
                </tr>
                <tr>{boards[0].items[0].name}</tr>
                <tr></tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="d-flex justify-content-center">
        <div className="card task-modal">
          <div>
            {this.display()}
          </div>
          <div>

            <button
              className="btn btn-primary"
              onClick={ this.props.onClick }
            >
              Done
            </button>
          </div>
        </div>
      </div>
    )
  }
}
