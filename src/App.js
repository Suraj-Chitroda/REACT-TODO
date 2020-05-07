import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      newItem : "",
      list: []
    }
  }

  addItem(todoValue){
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false
      };

      const list = [...this.state.list]
      list.push(newItem);

      this.setState({list, newItem:""});
    
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updlist = list.filter(item => item.id !== id);
    this.setState({list:updlist});
  }

  updateInput(input){
    this.setState({newItem:input});
  }

  render() {
    return (
      <header className="App-header">
        <div className="App">
            <img src={logo} height="150" width="150" alt="hello" className="App-logo"/>
            <h1 className="App-title">TODO By LCO</h1>
            <p className="App-p1">Add any item...</p>
            <input type="text"
              placeholder="Enter Todo"
              className="input-text"
              required
              value={this.state.newItem}
              onChange={e => this.updateInput(e.target.value)}
              />
            <button className="add-btn" id="add"
              onClick={() => this.addItem(this.state.newItem)}
              disabled = {!this.state.newItem.length}
            >Add</button>
            <div className="lst">
              <ul type="none" >
                {this.state.list.map(item=>{
                  return(
                    <li key={item.id}>
                      <input
                        type="checkbox"
                        name="isdone"
                        checked={item.isDone}
                        onChange={()=>{}}
                       /> 
                       {item.value}
                       <button 
                        className="del-btn"
                        onClick={()=>this.deleteItem(item.id)}
                       >Delete</button>
                    </li>
                  );
                })}
              </ul>
            </div>
        </div>
      </header>
    );
  }
}

export default App;