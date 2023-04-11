import { useDispatch } from 'react-redux';
import { counterActions } from "../store/gameCounter";
import React, { useState } from 'react';
import './Question.scss';

const Question= React.memo(({ question, correctA, incorrectA, qNumber, onNextButtonClicked })=> {
	const [userA, setUserA] = useState('')
	const dispatch = useDispatch();
	let answersArray = incorrectA.concat(correctA);
	answersArray.sort();
	console.log(answersArray);

	const checkAnswerHandler = (event) => {
		setUserA(event.currentTarget.value)
	}
	
	const answersList = answersArray.map((a, index) => (
		<div key={a} className='radio'>
			<input id={`${qNumber}radio-${index}`} name={qNumber} type='radio' value={a} onChange={checkAnswerHandler} />
			<label htmlFor={`${qNumber}radio-${index}`} className='radio-label'>
				{a}
			</label>
		</div>
	));
	
	const submitHandler =( event) => {
		event.preventDefault();
		if(userA === correctA){
			dispatch(counterActions.icrement)
		}
		onNextButtonClicked()
	}
	return (
		<form className='question' onSubmit={submitHandler}>
			<p style={{ fontSize: '18px', fontWeight:"bold" }}>{question}</p>
			{answersList}

			<div>
				<button type='submit'>Next</button>
			</div>
		</form>
	);
}
)


export default Question;