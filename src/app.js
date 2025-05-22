import styles from './app.module.css';
import data from './data.json';
import { useState } from 'react';

export const App = () => {
    const [steps] = useState(data);
    let [activeIndex, setActiveIndex] = useState(0);

    const nexStep = () => {
        if (activeIndex === steps.length - 1) {
            console.log('lol');
            setActiveIndex(0);
        } else {
            if (activeIndex < steps.length - 1) {
                setActiveIndex((prev) => prev + 1);
                console.log(activeIndex);
            }
        }
    };

    const backStep = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
            console.log(activeIndex);
        }
    };
    const clickStep = (e) => {
        setActiveIndex(Number(e.target.value));
        console.log(activeIndex);
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1>Инструкция по готовке пельменей</h1>
                <div className={styles.steps}>
                    <div className={styles['steps-content']}>
                        {steps[activeIndex].content}
                    </div>
                    <ul className={styles['steps-list']}>
                        {data.map((item, index) => (
                            <li
                                key={item.id}
                                className={
                                    styles['steps-item'] +
                                    ' ' +
                                    (index === activeIndex ? ' ' + styles.active : '') +
                                    (index <= activeIndex ? ' ' + styles.done : '')
                                }
                            >
                                <button
                                    className={styles['steps-item-button']}
                                    onClick={clickStep}
                                    value={index}
                                >
                                    {index + 1}
                                </button>
                                Шаг {index + 1}
                            </li>
                        ))}
                    </ul>
                    <div className={styles['buttons-container']}>
                        <button
                            className={styles.button}
                            onClick={backStep}
                            disabled={activeIndex === 0}
                        >
                            Назад
                        </button>
                        {activeIndex === steps.length - 1 ? (
                            <button className={styles.button} onClick={nexStep}>
                                начать сначала
                            </button>
                        ) : (
                            <button className={styles.button} onClick={nexStep}>
                                Далее
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
