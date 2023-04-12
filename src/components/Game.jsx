import React, { useState } from 'react';
import Question from './Question';
import Card from '../UI/Card';
import Result from './Result';

const Game = React.memo(({ questions, cleaner }) => {
	const [currentQ, setCurrentQ] = useState(0);
	console.log('Game rendered');
	const questionsAmount = questions.length;

	const nextButtonHandler = () => {
		setCurrentQ(prev => prev + 1);
	};

	const currentQuestion = () => {
		if (currentQ < questionsAmount) {
			return (
				<Question
					key={'Q' + currentQ}
					qNumber={currentQ}
					question={questions[currentQ].question}
					correctA={questions[currentQ].correctAnswer}
					incorrectA={questions[currentQ].incorrectAnswers}
					onNextButtonClicked={nextButtonHandler}
				/>
			);
		}
	};
	return <Card>{currentQ < questionsAmount ? currentQuestion() : <Result questionsAmount={questionsAmount} cleaner={cleaner}/>}</Card>;
});

export default Game;
