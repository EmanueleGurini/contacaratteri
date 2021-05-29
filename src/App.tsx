import React, { useState } from 'react';
import { connect } from 'react-redux';
import { textAction } from './action/textAction';
import './App.css';

interface IState {
  text ? : string;
  textAction ? : any; 
}

function App(props: IState) {

  const { text, textAction } = props;

  const handleChange = (e : any) :void => {
    textAction(e.target.value);
  }

  return (
    <div className="app">
      <h1>Conta Caratteri</h1>
      <input onChange={handleChange} />
      <p>{ text }</p>
    </div>
  );
}

const mapStateToProps = (state : any) : any => {
  return {
    text : state.text
  }
}

const mapDispatchToProps = (dispatch: any): any => {
  return {
    textAction : (text : string) => dispatch(textAction(text))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(App);



