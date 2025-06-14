import { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {
	const [formData, setFormData] = useState({
		login: '',
		password: '',
		returnPassword: '',
	});
	const [passerror, setPasseError] = useState(null);
	const butnRef = useRef(null);

	const validate = (data) => {
		if (data.password.length < 3) {
			return 'Пароль должен быть длиннее 3 символов';
		}
		if (!/^[\w_]*$/.test(data.password)) {
			return 'Недопустимые символы: только буквы, цифры и _';
		}
		if (data.returnPassword && data.password !== data.returnPassword) {
			return 'Пароли не совпадают';
		}
		return null;
	};

	const onLoginChange = ({ target }) => {
		const data = { ...formData, [target.name]: target.value };
		setFormData(data);

		if (target.name === 'password' || target.name === 'returnPassword') {
			const validationError = validate(data);
			setPasseError(validationError);
		}
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const error = validate(formData);
		setPasseError(error);

		if (!error) {
			console.log(formData);
			butnRef.current?.focus();
		}
	};

	const onBlur = () => {
		const validationError = validate(formData);
		setPasseError(validationError);
	};

	useEffect(() => {
		if (
			formData.login &&
			formData.password &&
			formData.returnPassword &&
			!passerror
		) {
			butnRef.current?.focus();
		}
	}, [formData, passerror]);

	return (
		<div className="forma">
			<p>test form</p>
			<p>{passerror}</p>
			<form onSubmit={onSubmit}>
				<input
					type="email"
					placeholder="email"
					name="login"
					value={formData.login}
					onChange={onLoginChange}
				/>
				<input
					type="password"
					placeholder="password"
					name="password"
					value={formData.password}
					onChange={onLoginChange}
					onBlur={onBlur}
				/>
				<input
					type="password"
					placeholder="retutnPassword"
					name="returnPassword"
					value={formData.returnPassword}
					onChange={onLoginChange}
					onBlur={onBlur}
				/>
				<button ref={butnRef} disabled={passerror !== null}>
					Отправить
				</button>
			</form>
		</div>
	);
}

export default App;
