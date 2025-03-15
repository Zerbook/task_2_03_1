import React from "react";
import PropTypes from 'prop-types'
import InformationLayout from "./InformationLayout";

const InformationContainer = ({ currentPlayer, isGameEnded, isDraw}) => {
	return (
		<InformationLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
		/>
	)
}

InformationContainer.PropTypes = {
	currentPlayer: PropTypes.oneOf(['X', 'O']).isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	isDraw: PropTypes.bool.isRequired
}

export default InformationContainer
