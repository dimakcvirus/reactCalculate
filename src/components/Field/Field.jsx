import FiledLayout from './FieldLayout';
import PropTypes from 'prop-types';

const Filed = ({
    cell,
    setcurrentPlayer,
    currentPlayer,
    setfield,
    setisGameEnded,
    isGameEnded,
    setisDraw,
}) => {
    const WIN_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Варианты побед по горизонтали
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Варианты побед по вертикали
        [0, 4, 8],
        [2, 4, 6], // Варианты побед по диагонали
    ];

    const newCell = [...cell];
    const clic = (index) => {
        if (newCell[index] === '') {
            if (isGameEnded) return;
            newCell[index] = currentPlayer;

            const isWinner = WIN_PATTERNS.some((pattern) =>
                pattern.every((index) => newCell[index] === currentPlayer),
            );
            if (!isWinner && newCell.every((item) => item !== '')) {
                setisDraw(true);
            }
            if (isWinner) {
                setisGameEnded(true);
            } else {
                if (currentPlayer === 'X') {
                    setcurrentPlayer('O');
                } else {
                    setcurrentPlayer('X');
                }
            }
        }

        setfield(newCell);
    };

    return (
        <FiledLayout
            cell={newCell}
            clic={clic}
            currentPlayer={currentPlayer}
            setcurrentPlayer={setcurrentPlayer}
        />
    );
};

Filed.propTypes = {
    cell: PropTypes.array,
    currentPlayer: PropTypes.string,
    isGameEnded: PropTypes.bool,
};

export default Filed;
