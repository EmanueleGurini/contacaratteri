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
  const [allLetters, setAllLetters] = useState(0);
  const [allLettersWithoutSpaces, setAllLettersWithoutSpaces] = useState(0);
  const [allWords, setAllWords] = useState(0);

  const setArrayWithAllLetters = (value : any) : void => {
    let arrayWithAllLetters = value.split("");
    setAllLetters(arrayWithAllLetters.length);
    
  }

  const setArrayWithLettersButNotSpaces = (value : any) => {
    let arrayWithAllLettersButNotSpaces = value.split("");
    let result = arrayWithAllLettersButNotSpaces.filter((word: string) => word !== " ");
    setAllLettersWithoutSpaces(result.length);
  }

  const setArrayWithAllWords = (value : any) => {
    let arrayWithAllWords = value.split(" ");
    setAllWords(arrayWithAllWords.length);
  }
  
  const handleChange = (e : any) :void => {
    textAction(e.target.value);
    setArrayWithAllLetters(e.target.value);
    setArrayWithLettersButNotSpaces(e.target.value);
    setArrayWithAllWords(e.target.value);
  }

  return (
    <div className="app">
      <h1>Conta Caratteri</h1>
      <input onChange={handleChange} />
      <p>{ `All letters ${allLetters}` }</p>
      <p>{ `All letters without spaces ${allLettersWithoutSpaces}` }</p>
      <p>{ allLetters === 0 ? `All Words 0` : `All Words ${allWords}` }</p>
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



