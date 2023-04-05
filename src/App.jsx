import React, { useContext, useState } from 'react';
import { AuthContext } from './context/auth-context';
import Welcome from './components/Welcome';
import StartGame from './components/StartGame';

function App() {
	const authContext = useContext(AuthContext);
	const [difficulty, setDifficulty] = useState('medium');
	const [questionsAmount, setQuestionsAmount] = useState(5);
	const [isGameSet, setIsGameSet] = useState(false);

	const radioClickHandler = event => {
		setDifficulty(event.currentTarget.value);
	};

	const questionsAmountHandler = event => {
		setQuestionsAmount(event.currentTarget.value);
	};
  
  let url;
 const submitHandler=(event)=> {
  event.preventDefault();
  url = `https://the-trivia-api.com/api/questions?limit=${questionsAmount}&region=PL&difficulty=${difficulty}`;
  setIsGameSet(true)
  console.log(url);

 }



	let content = <Welcome />;

	if (authContext.isAuth) {
		content = <StartGame onRadioChange={radioClickHandler} onQuestionsAmountChange={questionsAmountHandler} difficulty={difficulty} prepareGame={submitHandler}/>;
	}

	return <div className='App'>{content}</div>;
}

export default App;
