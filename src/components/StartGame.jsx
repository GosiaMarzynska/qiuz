import React, { useContext} from 'react';
import { AuthContext } from '../context/auth-context';
import classes from './StartGame.module.css';
import Card from '../UI/Card';

const StartGame = React.memo(({onRadioChange, onQuestionsAmountChange, prepareGame}) =>{
	const authContext = useContext(AuthContext);


	const name = authContext.name;





	return (
		<Card>
			<h2 className={classes.title}>Hi {name ? name : 'User'}!</h2>
			<p className={classes.message}>Your game will be ready soon!</p>
      
			<form onSubmit={prepareGame} className={classes.form}>
				<div> 
                    <p className={classes.label}>Select Difficulty</p>
                    <div className={classes.radio}>
		        
					<input className={classes['radio-input']} type='radio' name='difficulty' id='easy' value='easy'  onChange={onRadioChange}/>
					<label className={classes['radio-label']} htmlFor='easy'>
						Easy
					</label>

					<input className={classes['radio-input']} type='radio' name='difficulty' id='medium' value='medium'  onChange={onRadioChange}/>
					<label className={classes['radio-label']} htmlFor='medium'>
						Medium 
					</label>

					<input className={classes['radio-input']} type='radio' name='difficulty' id='hard' value='hard' onChange={onRadioChange}/>
					<label className={classes['radio-label']} htmlFor='hard'>
						Hard
					</label>
				</div>
                </div>
				<p>
					<label className={classes.label} htmlFor='questionsAmount'>How many questions?</label>
					<input className={classes['form-input']}type='number' id='questionsAmount' name='questionsAmount' min='1' max='20' defaultValue='5' onChange={onQuestionsAmountChange}/>
				</p>
				<div className={classes.actions}>
					<button type='submit'>Start Game</button>
				</div>
			</form>
		</Card>
	);
}
)

export default StartGame;
