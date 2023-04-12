import { useDispatch } from 'react-redux';
import { counterActions } from '../store/gameCounter';
import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Question.scss';
import Card from '../UI/Card';

const Question = React.memo(({ question, correctA, incorrectA, qNumber, onNextButtonClicked, isShown }) => {
	const [userA, setUserA] = useState('');
	const dispatch = useDispatch();
	let answersArray = incorrectA.concat(correctA);
	answersArray.sort();
	console.log(answersArray);

	const checkAnswerHandler = event => {
		setUserA(event.currentTarget.value);
	};

	const answersList = answersArray.map((a, index) => (
		<div key={a} className='radio'>
			<input id={`${qNumber}radio-${index}`} name={qNumber} type='radio' value={a} onChange={checkAnswerHandler} />
			<label htmlFor={`${qNumber}radio-${index}`} className='radio-label'>
				{a}
			</label>
		</div>
	));

	const submitHandler = event => {
		event.preventDefault();
		if (userA === correctA) {
			dispatch(counterActions.increment());
		}
		onNextButtonClicked();
	};

	const animationTiming = {
		enter: 400,
		exit: 400,
	};

	return (
		<CSSTransition
			mountOnEnter
			unmountOnExit
			in={isShown}
			timeout={animationTiming}
			classNames={{ enter: '', enterActive: 'QuestionShown', exit: '', exitActive: 'QuestionHidden' }}>
			<div className='question'>
				<Card>
					<form onSubmit={submitHandler}>
						<p style={{ fontSize: '18px', fontWeight: 'bold' }}>{question}</p>
						{answersList}
						<div>
							<button className='button' type='submit'>{`>`}</button>
						</div>
					</form>
				</Card>
			</div>
		</CSSTransition>
	);
});

export default Question;
