import { useState } from 'react';
import styles from './App.module.css';
function App() {
    const [operator1, setOperator1] = useState('');
    const [opredant, setOpredant] = useState('');
    const [operator2, setOperator2] = useState('');
    const [isResult, setisresult] = useState(false);

    const nums = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '=', 'C', '0'];

    const test = (e) => {
        let elem = e.target.innerText;

        if (elem === 'C') {
            setOperator1('');
            setOperator2('');
            setOpredant('');
            setisresult(false);
        }

        if (elem === '=' && operator1 && operator2) {
            const num1 = Number(operator1);
            const num2 = Number(operator2);

            let result = null;

            switch (opredant) {
                case '+':
                    result = num1 + num2;
                    console.log(result);
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
            }

            if (isNaN(elem) && elem !== '=' && elem !== 'C') {
                console.log(elem);
                setOpredant(elem);
                setisresult(false);
                return;
            }
            if (!opredant) {
                setOperator1((prev) => prev + elem);
            } else {
                setOperator2((prev) => prev + elem);
            }

            console.log('Результат:', result);
            setOperator1(Math.floor(result));
            setOperator2('');
            setOpredant('');
            setisresult(true);
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.calculator}>
                <div
                    className={styles.display}
                    style={{ color: isResult ? 'green' : 'black' }}
                >
                    {operator1}
                    {opredant}
                    {operator2}
                </div>
                <div className={styles.buttons} onClick={test}>
                    {nums.map((item) => (
                        <button key={item} className={styles.button}>
                            {item}
                        </button>
                    ))}

                    {/* <button className={styles.button}>*</button>
					<button className={styles.button}>-</button>
					<button className={styles.button}>/</button>
					<button className={styles.button}>=</button>
					<button className={styles.button}>+</button>
					<button className={styles.button}>C</button> */}
                </div>
            </div>
        </div>
    );
}

export default App;
