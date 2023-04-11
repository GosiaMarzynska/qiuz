import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './context/auth-context';
import Welcome from './components/Welcome';
import StartGame from './components/StartGame';
import Game from './components/Game';


function App() {
	const authContext = useContext(AuthContext);
	const [difficulty, setDifficulty] = useState('medium');
	const [questionsAmount, setQuestionsAmount] = useState(5);
	const [isGameSet, setIsGameSet] = useState(false);
	const [questions, setQuestions] = useState(null);
	const [url, setUrl] = useState('');

	const radioClickHandler = event => {
		setDifficulty(event.currentTarget.value);
	};

	const questionsAmountHandler = event => {
		setQuestionsAmount(event.currentTarget.value);
	};

	
	useEffect(() => {
		if(isGameSet){
			fetch(url)
			.then(res => res.json())
			.then(data => setQuestions(data))
		}
	}, [url, isGameSet]);

	const submitHandler = event => {
		event.preventDefault();
		setUrl(`https://the-trivia-api.com/api/questions?limit=${questionsAmount}&region=PL&difficulty=${difficulty}`);
		setIsGameSet(true);
	};

	let content;
	if (!authContext.isAuth && !isGameSet) {
		content = <Welcome />;
	}

	if (authContext.isAuth && !isGameSet) {
		content = (
			<StartGame
				onRadioChange={radioClickHandler}
				onQuestionsAmountChange={questionsAmountHandler}
				difficulty={difficulty}
				prepareGame={submitHandler}
			/>
		);
	}

	if (authContext.isAuth && isGameSet && questions) {
		content = <Game questions={questions} />;
	}

	return <div className='App'>{content}</div>;
}

export default App;
