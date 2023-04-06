import { useEffect, useState } from 'react';
import Question from './Question';
import Card from '../UI/Card';

export default function Game({questions}) {
	const [correctAnswersList, setCorrectAnswersList] = useState([])

    useEffect (()=> {
        questions.map((question, index) =>
            setCorrectAnswersList(prev => [...prev, {index:index, correctA:question.correctAnswer}])
            );
            
            console.log('POPRAWNE ODPOWIEDZI');
            console.log(correctAnswersList);
    }, [])

	const questionsList = questions.map((question, index) => (
		<Question
			key={'Q' + index}
			qNumber={'Q' + index}
			question={question.question}
			correctA={question.correctAnswer}
			incorrectA={question.incorrectAnswers}
		/>
	));

    const submitHandler= (event ) =>{
        event.preventDefault();
      }
	return (
		<Card>
            <form onSubmit={submitHandler}>
			<p>{questionsList}</p>
<div className={styles.action}>
    <button>Submit</button>
</div>

            </form>
		</Card>
	);
}
