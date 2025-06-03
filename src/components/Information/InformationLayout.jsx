import styles from './InformationLayout.module.css';

const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
    return (
        <>
            <div className={styles.info}>
                {isDraw && <p>Ничья</p>}
                {!isDraw && !isGameEnded && <p>ходит: {currentPlayer} </p>}
                {!isDraw && isGameEnded && <p>Победа: {currentPlayer}</p>}
            </div>
        </>
    );
};

export default InformationLayout;
