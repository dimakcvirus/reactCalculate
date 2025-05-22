import styles from './app.module.css';
import { useState } from 'react';
import { format } from 'date-fns';

function App() {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState('');
    let isValueVaild = value.length >= 3;

    const onInputButtonClick = () => {
        let promptValue = prompt();

        if (promptValue.length < 3) {
            setError('Введенное значение должно содержать минимум 3 символа ');
        } else {
            setValue(promptValue);
            setError('');
        }

        console.log(promptValue);
    };
    const addDate = () => {
        const date = new Date();
        const formatted = format(date, 'dd.MM.yyyy HH:mm:ss');
        return formatted;
    };

    const onAddButtonClick = () => {
        setList((prevList) => [
            ...prevList,
            { id: Date.now(), date: addDate(), value: value },
        ]);
        setValue('');
        setError('');
    };
    return (
        <div className={styles.app}>
            <h1 className={styles['page-heading']}>Ввод значения</h1>
            <p className={styles['no-margin-text']}>
                Текущее значение <code>value</code>: "
                <output className={styles['current-value']}>{value}</output>"
            </p>
            {error !== '' && <div className={styles.error}>{error}</div>}
            <div className={styles['buttons-container']}>
                <button className={styles.button} onClick={onInputButtonClick}>
                    Ввести новое
                </button>
                <button
                    className={styles.button}
                    disabled={!isValueVaild}
                    onClick={onAddButtonClick}
                >
                    Добавить в список
                </button>
            </div>
            <div className={styles['list-container']}>
                <h2 className={styles['list-heading']}>Список:</h2>
                {list === '' && (
                    <p className={styles['no-margin-text']}>Нет добавленных элементов</p>
                )}
                <ul className={styles.list}>
                    {list.map((item) => (
                        <li className={styles['list-item']} key={item.id}>
                            {item.date}: {item.value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
