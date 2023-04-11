import React, { useEffect, useState, useCallback } from 'react';
import Question from './Question';
import Card from '../UI/Card';

const Game = React.memo(({ questions }) => {
	const [correctAnswersList, setCorrectAnswersList] = useState([]);
	const [currentQ, setCurrentQ] = useState(0);
	console.log('Game rendered');

	useEffect(() => {
		const correctAnswers = questions.map(question => question.correctAnswer);
		setCorrectAnswersList(correctAnswers);
		console.log(`Poprawne odpowiedzi to ${[...correctAnswers]}`);
	}, [questions]);

	const nextButtonHandler = () => {
		setCurrentQ(prev => prev + 1);
	};

	// const questionsList = questions.map((question, index) => (
	// 	<Question
	// 		key={'Q' + index}
	// 		qNumber={index}
	// 		question={question.question}
	// 		correctA={question.correctAnswer}
	// 		incorrectA={question.incorrectAnswers}
	// 		onNextButtonClicked={nextButtonHandler}
	// 	/>
	// ));

	const currentQuestion = (
		<Question
			key={'Q' + currentQ}
			qNumber={currentQ}
			question={questions[currentQ].question}
			correctA={questions[currentQ].correctAnswer}
			incorrectA={questions[currentQ].incorrectAnswers}
			onNextButtonClicked={nextButtonHandler}
		/>
	);

	const submitHandler = event => {
		event.preventDefault();
		console.log(event.current.value);
	};

	return <Card>{currentQuestion}</Card>;
});

export default Game;
