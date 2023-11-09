import {useEffect, useState} from 'react';
import Axios from 'axios';
import './App.css';

import SearchApp from './components/SearchApp.js';

export default function App() {

  const [soSearchData, setSoSearchData] = useState([]);
  const [redditSearchData, setRedditSearchData] = useState([]);

  useEffect(() => {
    setSoSearchData({
      category : "questions",
      route : "question_by_tag",
      page : "1",
      pagesize : "50",
      from_date : "",
      to_date : "",
      sort: "activity",
      order : "desc",
      tagged : "html,css,react",
      site : "stackoverflow",
      nottagged : "",
      intitle : "",
      user : "",
      query : "",
      body : "", 
      accepted : "",
      closed : "",
      migrated : "",
      wiki : "",
    })
  }, []);

  return (
    <>
      <SearchApp soSearchData={soSearchData} setSoSearchData={setSoSearchData}/>
      <StackQuestionContainer />
    </>
  );
}




function StackQuestionContainer(){

  const [questionTitle, setQuestionTitle] = useState("How do I align divs so that they appear side-by-side?");
  const [questionTags, setQuestionTags] = useState([{id: 1, name: "html"}, {id: 2, name: "css"}, {id: 3, name: "alignment"}]);
  const [questionUser, setQuestionUser] = useState("User");
  const [questionAccepted, setQuestionAccepted] = useState("Accepted");
  const [questionAnswerCount, setQuestionAnswerCount] = useState(0);
  const [questionCreatedDate, setQuestionCreatedDate] = useState(0);
  const [questionLastActivityDate, setQuestionLastActivityDate] = useState(0);
  const [questionVoteNumber, setQuestionVoteNumber] = useState(0);

  const question = {
    title: questionTitle,
    tagList: questionTags,
    username: questionUser,
    accepted: questionAccepted,
    answerCount: questionAnswerCount,
    createdDate: questionCreatedDate,
    lastActivityDate: questionLastActivityDate,
    voteNumber: questionVoteNumber
  };


  return(
    <div className="stack-question-container">
      <StackQuestionTitle question={question}/>
      <StackQuestionTags question={question}/>
      <div className="stack-question-data-holder">
        <StackQuestionUser question={question}/>
        <StackQuestionAccepted question={question}/>
        <StackQuestionAnswerCount question={question}/>
        <StackQuestionCreatedDate question={question}/>
        <StackQuestionLastActivityDate question={question}/>
        <StackQuestionVoteNumber question={question}/>
      </div>
    </div>
  );
}

function StackQuestionTitle({question}){
  return(
    <div className="stack-question-title">
      <span>{ question.title }</span>
    </div>
  );
}

function StackQuestionTags({question}){

  const tags = question.tagList.map(tag =>
    <div className='question-tag-element' key={tag.id}>
      {tag.name}
    </div>
    );

  return(
    <div className="stack-question-tags">
      {tags}
    </div>
  );
}


function StackQuestionUser({question}){
  return(
    <div className="stack-question-user">
      <span>{question.username}</span>
    </div>
  );
}

function StackQuestionAccepted({question}){
  return(
    <div className="stack-question-accepted">
      <span>{question.accepted}</span>
    </div>
  );
}

function StackQuestionAnswerCount({question}){
  return(
    <div className="stack-question-answer-count">
      <span>{question.answerCount}</span>
    </div>
  );
}

function StackQuestionCreatedDate({question}){
  return(
    <div className="stack-question-created-date">
      <span>{question.createdDate}</span>
    </div>
  );

}

function StackQuestionLastActivityDate({question}){
  return(
    <div className="stack-question-last-activity-date">
      <span>{question.lastActivityDate}</span>
    </div>
  );
}

function StackQuestionVoteNumber({question}){
  return(
    <div className="stack-question-vote-number">
      <span>{question.voteNumber}</span>
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