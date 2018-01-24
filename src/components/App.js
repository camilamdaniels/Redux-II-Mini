import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import { connect } from 'react-redux';
// pull in actions from action/index
import { IS_FETCHING, CHARS_FETCHED, ERROR_FETCHING_CHARS, getChars } from '../actions/index.js';
import Chars from '../Chars';

class App extends Component {
  componentDidMount() {
    // call our action
    this.props.getChars();
  }
  render() {
    const { chars } = this.props;
    return (
      <div className="App">
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : null}
        <Chars chars={chars} />
      </div>
    );
  }
}

// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
const mapDispatchToProps = state => {
  return {
    chars: state.chars,
    fetching: state.fetching
  }
}

export default connect(mapDispatchToProps, { getChars })(App);
