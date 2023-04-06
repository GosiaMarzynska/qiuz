
import './Question.scss';

export default function Question({ question, correctA, incorrectA, qNumber }) {
	let answersArray = incorrectA.concat(correctA);
	answersArray.sort();
	console.log(answersArray);

	const answersList = answersArray.map((a, index) => (
		<div key={a} className='radio'>
			<input id={`${qNumber}radio-${index}`} name={qNumber} type='radio' />
			<label htmlFor={`${qNumber}radio-${index}`} className='radio-label'>
				{a}
			</label>
		</div>
	));

	return (
		<div className='question'>
			<h2 style={{ fontSize: '18px' }}>{question}</h2>
			{answersList}
		</div>
	);
}
