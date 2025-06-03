import { useState } from 'react';
import styles from './App.module.css';
import FiledLayout from './components/Field/FieldLayout';
import Game from './components/Game/Game';

function App() {
    return (
        <>
            <div className={styles.app}>
                <Game />
            </div>
        </>
    );
}

export default App;
