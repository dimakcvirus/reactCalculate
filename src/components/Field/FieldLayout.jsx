import styles from './FiledLayout.module.css';
import PropTypes from 'prop-types';

const FiledLayout = ({ cell, clic }) => {
    return (
        <>
            <div className={styles.board}>
                {cell.map((cells, index) => (
                    <button
                        key={index}
                        onClick={() => clic(index, clic)}
                        className={styles.cell}
                    >
                        {cells}
                    </button>
                ))}
            </div>
        </>
    );
};

FiledLayout.propTypes = {
    cell: PropTypes.array,
};
export default FiledLayout;
