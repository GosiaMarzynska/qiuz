import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth-context';
import classes from './StartGame.module.css';

export default function StartGame() {
	const authContext = useContext(AuthContext);
    const [difficulty, setDifficulty]= useState('medium');
    const [questionsAmount, setQuestionsAmount] = useState(5)

	const name = authContext.name;

    const radioClickHandler = event => {setDifficulty(event.currentTarget.value)
    console.log(difficulty)}
    const isRadioSelect = (selectDifficulty) => selectDifficulty === difficulty;

const questionsAmountHandler = event => {setQuestionsAmount(event.currentTarget.value); console.log(questionsAmount)}
	const prepareGame = event => {
		event.preventDefault();
	};

	return (
		<div className={classes.card}>
			<h2 className={classes.title}>Hi {name ? name : 'Mateusz'}!</h2>
			<h2>Your game will be ready soon!</h2>
            <br/>
			<form onSubmit={prepareGame} className={classes.form}>
				<div> 
                    <p className={classes.label}>Select Difficulty</p>
                    <div className={classes.radio}>
		        
					<input className={classes['radio-input']} type='radio' name='difficulty' id='easy' value='easy' checked={isRadioSelect('easy')} onChange={radioClickHandler}/>
					<label className={classes['radio-label']} htmlFor='easy'>
						Easy
					</label>

					<input className={classes['radio-input']} type='radio' name='difficulty' id='medium' value='medium' checked={isRadioSelect('medium')} onChange={radioClickHandler}/>
					<label className={classes['radio-label']} htmlFor='medium'>
						Medium 
					</label>

					<input className={classes['radio-input']} type='radio' name='difficulty' id='hard' value='hard' checked={isRadioSelect('hard')} onChange={radioClickHandler}/>
					<label className={classes['radio-label']} htmlFor='hard'>
						Hard
					</label>
				</div>
                </div>
				<p>
					<label className={classes.label} htmlFor='questionsAmount'>How many questions?</label>
					<input className={classes['form-input']}type='number' id='questionsAmount' name='questionsAmount' min='1' max='20' defaultValue='5' onChange={questionsAmountHandler}/>
				</p>
				<div className={classes.actions}>
					<button type='submit'>Start Game</button>
				</div>
			</form>
		</div>
	);
}
