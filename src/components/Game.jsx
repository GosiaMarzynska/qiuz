import React, { useState } from 'react';
import Question from './Question';

import Result from './Result';

const Game = React.memo(({ questions, cleaner }) => {
	const [currentQ, setCurrentQ] = useState(0);
	const [isShown, setIsShown] = useState(true);
	console.log('Game rendered');
	const questionsAmount = questions.length;

	const nextButtonHandler = () => {
		setIsShown(false)
		setTimeout(() => {
			setCurrentQ(prev => prev + 1);
		}, 600);
		setTimeout(() => {
			setIsShown(true);
		
		}, 1000);
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
					isShown={isShown}
				/>
			);
		}
	};
	return (
		<>
			{currentQ < questionsAmount ? currentQuestion() : <Result questionsAmount={questionsAmount} cleaner={cleaner} />};
		</>
	);
});

export default Game;
