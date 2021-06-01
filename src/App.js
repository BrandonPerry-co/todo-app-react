import React, { Component } from 'react';
import './App.css';
import TodoCard from './TodoCard';

export default class App extends Component {
  constructor(props) {
    super(props)

  //State 
  // where we define our own properties
    this.state = {
      isClicked: false,
      inputValue: "", 
      listOfTodos: []
    }
  };

  //binding
  //   this.onClickHandler = this.onClickHandler.bind(this);
  //  this.handleClick = this.handleClick.bind(this);

  // onClickHandler() {
  //   const clickValue = this.state.isClicked;//reading
  //   this.setState({isClicked: !clickeValue });//writing
  // }

   handleClick = () => {
     this.state.isClicked ? 
     this.setState({isClicked : false}) :
       this.setState({isClicked : true})
   }

  handleChange = (event)=> {
    this.setState({inputValue: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({listOfTodos: [...this.state.listOfTodos, this.state.inputValue]})
    this.setState({inputValue: ""})
  }

  deleteItem = (index)=> {
    let listCopy = this.state.listOfTodos
    listCopy.splice(index, 1)
    this.setState({listOfTodos: [...listCopy]})
  }

  render() {
  return (
    <div className="App">
      {console.log(this.state.isClicked)}
      <h1>TODO LIST</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.handleChange}></input>
          <button type="submit">Submit Here</button>
        </form>
        <div className="todoContainer">
        <ol>{this.state.listOfTodos.map((todo, index)=> {
          return <TodoCard from key={index} index={index} title={todo} clickToRemove={this.deleteItem}/>
        })}</ol>
        </div>
    </div>
  );
}
}

/*<li key={index}>{todo}</li>
})}</ol>*/