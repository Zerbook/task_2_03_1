import React from "react";
import PropTypes from 'prop-types';
import styles from './InformationLayout.module.css'

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw}) => {
	let status;
	if (isDraw) {
		status = 'Ничья'
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`
	} else {
		status = `Ходит: ${currentPlayer}`
	}

	return (
		<div className={styles.information}>
			<h2 className={styles.title}>{status}</h2>
		</div>
	)
}
InformationLayout.PropTypes = {
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired
}
export default InformationLayout
