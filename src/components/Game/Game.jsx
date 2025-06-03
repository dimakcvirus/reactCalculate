import styles from './Game.module.css';
import FiledLayout from '../Field/FieldLayout';
import Field from '../Field/Field';
import InformationLayout from '../Information/InformationLayout';
import { useState } from 'react';
import Information from '../Information/Information';
import PropTypes from 'prop-types';

const Game = () => {
    const [currentPlayer, setcurrentPlayer] = useState('X');
    const [isGameEnded, setisGameEnded] = useState(false);
    const [isDraw, setisDraw] = useState(false);
    const [field, setfield] = useState(['', '', '', '', '', '', '', '', '']);

    const click = () => {
        setfield(['', '', '', '', '', '', '', '', '']);
        setcurrentPlayer('X');
        setisGameEnded(false);
        setisDraw(false);
    };

    return (
        <>
            <div className={styles.game}>
                <h1>Крестики-нолики</h1>
            </div>
            {/* <InformationLayout currentPlayer={currentPlayer} /> */}
            <Information
                currentPlayer={currentPlayer}
                isDraw={isDraw}
                isGameEnded={isGameEnded}
            />
            <Field
                cell={field}
                currentPlayer={currentPlayer}
                setcurrentPlayer={setcurrentPlayer}
                setfield={setfield}
                setisGameEnded={setisGameEnded}
                isGameEnded={isGameEnded}
                setisDraw={setisDraw}
            />

            <button className={styles.reset} onClick={click}>
                Начать заново
            </button>
        </>
    );
};

Game.propTypes = {
    cell: PropTypes.string,
    currentPlayer: PropTypes.string,
};

export default Game;
