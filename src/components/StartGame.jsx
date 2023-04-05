import React, {useContext} from 'react';
import { AuthContext } from '../context/auth-context';
import classes from './StartGame.module.css';

export default function StartGame() {
const authContext = useContext(AuthContext)

const name = authContext.name;
	return (
		<div className={classes.card}>
			<h2 className={classes.title}>Hi {name ? name : "Mateusz"}</h2>
			{/* <form onSubmit={submitHandler} className={classes.form}>
				<p>
					<label htmlFor='name'>Please enter your name</label>
					<input type='text' id='name' name='name' required />
				</p>
				<div className={classes.actions}>
					<button>OK</button>
				</div>
			</form> */}
		</div>
	);
}
