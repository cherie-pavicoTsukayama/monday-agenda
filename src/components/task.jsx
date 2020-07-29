import React from 'react';

export default class Task extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}


  }

  display() {
    if (this.props.boardData === null) {
      return <p>props board data is null</p>
    } else {
      return <p>props board data is not null</p>
    }
  }

  render() {

    return (
    <div>
      <h1>hello!</h1>
      { this.display() }
    </div>
    )
  }
}
