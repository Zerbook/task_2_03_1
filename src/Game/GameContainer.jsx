import React, {useState} from "react";
import GameLayout from "./GameLayout";
import FieldContainer from '../Field/FieldContainer'
import InformationContainer from "../Information/InformationContainer";

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6]
]

const GameContainer = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X')
	const [isGameEnded, setIsGameEnded] = useState(false)
	const [isDraw, setIsDraw] = useState(false)
	const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])

	const handleReset = () => {
		setCurrentPlayer('X')
		setIsGameEnded(false)
		setIsDraw(false)
		setField(['', '', '', '', '', '', '', '', ''])
	}

	const checkWinner = (newField) => {
		return WIN_PATTERNS.some(pattern =>
			pattern.every(index => newField[index] === currentPlayer)
		)
	}

	const handleCellClick = (index) => {
		if(field[index] || isGameEnded || isDraw) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField)

		if (checkWinner(newField)) {
			setIsGameEnded(true);
		} else if (!newField.includes('')) {
			setIsDraw(true)
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
		}
	}

	return (
		<GameLayout
			information={
				<InformationContainer
					currentPlayer={currentPlayer}
					isGameEnded={isGameEnded}
					isDraw={isDraw}
				/>
			}
			field={<FieldContainer field={field} onCellClick={handleCellClick}/>}
			onReset={handleReset}
		/>
	)
}



export default GameContainer
