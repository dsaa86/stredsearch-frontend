import {useState} from 'react';
import './App.css';

function App() {
  return (
    
  );
}

export default App;


function StackQuestionContainer(){


  return(
    <div className="stack-question-container">
      <StackQuestionTitle />
      <StackQuestionTags />
    </div>
  );
}

function StackQuestionTitle(){
  return(
    <div className="stack-question-title">
      <span className="stack-question-title-value">{ questionTitleValue }</span>
    </div>
  );
}

function StackQuestionTags(){

  const tags = tagList.map(tag =>
    <li key={tag.id}>
      {tag.name}
    </li>
    );

  return(
    <div className="stack-question-tags">
      <ul>{tags}</ul>
    </div>
  );
}












// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );