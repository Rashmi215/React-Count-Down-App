import React, { Component } from 'react';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './clock';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {deadline: 'January 1, 2019', newDeadline:''};
  }

  changeDeadline(){
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return(
      <div className = 'app'>
          <div className = 'app-title'> Count Down to { this.state.deadline } </div>
          <div> <Clock deadline = { this.state.deadline } /></div>
          <Form inline>
             <FormControl
              className = 'deadline-input'
              placeholder = 'Enter date'
              onChange = {(event) => this.setState({ newDeadline: event.target.value})}
              />
             <Button onClick = {()=>this.changeDeadline()}>Submit</Button>
          </Form>
      </div>
    );
  }
}


export default App;
