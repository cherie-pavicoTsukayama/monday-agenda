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
          <p>{this.props.boardData.boards[0].name}</p>
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
                <td></td>

              </tr>
              <tr>{boards[0].items[0].name}</tr>
              <tr></tr>
            </tbody>
          </table>

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
