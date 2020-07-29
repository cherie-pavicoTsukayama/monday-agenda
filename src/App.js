import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import Task from './components/task';
const monday = mondaySdk();


class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      boardData: null
    };
    console.log(this.state)
  }


  componentDidMount() {
    // TODO: set up event listeners
    monday.listen("settings", res => {
      this.setState({settings: res.data});
    });
    monday.listen("context", res => {
      this.setState({context: res.data});
      console.log('response data:', res.data);

    monday.api(`query ($boardIds: [Int]) { boards (ids:$boardIds) { name items(limit:1) { name column_values { title text } } } }`,
      { variables: {boardIds: this.state.context.boardId} }
      )
    .then(res => {
      this.setState({ boardData: res.data });
      console.log("boardData:", this.state.boardData)
      })
    .catch(err => console.error(err));
    })
  }

 

  render() {
    return (
      <div className = "App"
      style = {{ background: (this.state.settings.background)}}
      >
        <Task boardData={this.state.boardData}/>
    </div >
    )
  }
}

export default App;
