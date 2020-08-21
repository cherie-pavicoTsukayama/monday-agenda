import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import Header from './components/Header';
import handleClickShowAddTaskModal from './components/AddTaskModal';
import AddTaskButton from './components/AddTaskButton';
import AddTaskModal from "./components/AddTaskModal";
const monday = mondaySdk();


class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
      boardData: null,
      showAddTaskModal: true
    };
    this.handleClickShowAddTaskModal = this.handleClickShowAddTaskModal.bind(this);
    this.displayAddTaskButtonOrAddTaskModal = this.displayAddTaskButtonOrAddTaskModal.bind(this);
  }

  handleClickShowAddTaskModal() {
    this.state.showAddTaskModal ? this.setState({ showAddTaskModal: false }) : this.setState({ showAddTaskModal: true })
  }
  displayAddTaskButtonOrAddTaskModal() {
    if(this.state.showAddTaskModal) {
      return <AddTaskModal onClick={this.handleClickShowAddTaskModal} boardData={this.state.boardData}/>
    } else {
      return <AddTaskButton onClick={this.handleClickShowAddTaskModal} />
    }
  }

  componentDidMount() {
    // TODO: set up event listeners
    monday.listen("settings", res => {
      this.setState({settings: res.data});
    });
    monday.listen("context", res => {
      this.setState({context: res.data});
      console.log('response data:', res.data);

    monday.api(`query ($boardIds: [Int])
    {
      boards (ids:$boardIds)
      {
        name items(limit:1)
        {
          name column_values
          {
            title text
          }
        }
      }
    }`,
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
        {this.displayAddTaskButtonOrAddTaskModal()}

    </div >
    )
  }
}

export default App;
