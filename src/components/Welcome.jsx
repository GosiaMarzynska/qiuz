import classes from './Welcome.module.css';

export default function Welcome() {
	const submitHandler = (event) => {
        event.preventDefault();
    };

	return (
		<div className={classes.card}>
			<h2 className={classes.title}>Welcome to quiz game!</h2>
			<form onSubmit={submitHandler} className={classes.form}>
				<p>
					<label htmlFor='name'>Please enter your name</label>
					<input type='text' id='name' name='name' required />
				</p>
				<div className={classes.actions}>
					<button>OK</button>
				</div>
			</form>
		</div>
	);
}
