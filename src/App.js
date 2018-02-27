import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './Posts';
import { posts } from './postsStore';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button onClick={this.onAddClick}>add post</button>
        <Posts />
      </div>
    );
  }

  onAddClick = async() => {
    try {
      await posts.add({
        text: '',
        title: ''
      });
    }
    catch (err) {
      //error
    }
  }

}

export default App;
