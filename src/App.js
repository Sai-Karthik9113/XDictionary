import React, { useState } from 'react';
import './App.css';
import { WordsInDictionary } from './WordsLibrary';

function App() {
  const [searchKeyWord, setSearchKeyWord] = useState('');
  const [keyWordMeaning, setKeyWordMeaning] = useState('');

  const handleChange = (e) => {
    setSearchKeyWord(e.target.value);
  }

  const handleClick = () => {
    const foundWord = WordsInDictionary.find((item) =>
      searchKeyWord.toLocaleLowerCase() === item.word.toLocaleLowerCase()
    );

    if(foundWord) {
      setKeyWordMeaning(foundWord.meaning);
    } else {
      setKeyWordMeaning('Word not found in the dictionary.');
    }
  }

  return (
    <div className="App">
      <h1>Dictionary App</h1>
      <input value={searchKeyWord} onChange={handleChange} placeholder='Search for a word...' />
      <button onClick={handleClick}>
        Search
      </button>
      <h4>Definition:</h4>
      {keyWordMeaning && <p>{keyWordMeaning}</p>}
    </div>
  );
}

export default App;
