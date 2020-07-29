import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import Header from './components/Header';
import AddTaskButton from './components/AddTaskButton';
const monday = mondaySdk();


class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      boardData: null,
      showAddTaskModal: false
    };
    this.handleClickShowAddTaskModal = this.handleClickShowAddTaskModal.bind(this);
  }

  handleClickShowAddTaskModal() {
    this.state.showAddTaskModal ? this.setState({ showAddTaskModal: false }) : this.setState({ showAddTaskModal: true })
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
      <div
        className="App"
        style = {{ background: (this.state.settings.background)}}
      >
          <Header boardData={this.state.boardData} />
          <AddTaskButton onClick={this.handleClickShowAddTaskModal}/>
    </div >
    )
  }
}

export default App;
