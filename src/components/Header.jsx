import React from 'react';

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}


  }



  render() {

    return (
    <div className="col-12 mt-4 d-flex flex-wrap">
      <h1 className="text-center col-12">Agenda</h1>
    </div>
    )
  }
}
