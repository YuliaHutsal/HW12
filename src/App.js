import React, { Component } from 'react';
import {faker} from '@faker-js/faker';
import ListItem from './components/ListItem'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      inputValue:'',
      items:[]
    }
    for(let i=0; i<5000; i++){
      this.state.items.push({
        value:faker.internet.userName(),
        id:i
      })
    }
  }
  submitForm(e){
    e.preventDefault();
    const {inputVal, items} = this.state;
    this.setState({
      items:[...items,{value:inputVal, id:Date.now()}],
      inputVal:''
    })
  }
  changeInput(e){
    this.setState({
      inputValue:e.target.value
    })
  }
  render() {
    const {inputVal, items} = this.state;
    return (
      <div>
        <form action='#' onSubmit={this.submitForm.bind(this)}>
          <input type="text" value = {inputVal} onChange={this.changeInput.bind(this)}/>
        </form>

        <ul>
         <ListItem items = {items}/>
        </ul>
      </div>
    );
  }
}
