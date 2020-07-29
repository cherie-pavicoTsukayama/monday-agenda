import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}


  }

  display() {
    if (this.props.boardData === null) {
      return <p>props board data is null</p>
    } else {
      return <p>{ this.props.boardData.boards[0].name }</p>
    }
  }

  render() {

    return (
    <div className="col-12 mt-4 d-flex flex-wrap">
      <h1 className="text-center col-12">Agenda</h1>
      <div>
          {this.display()}
      </div>
    </div>
    )
  }
}
