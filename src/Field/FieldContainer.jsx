
import PropTypes from 'prop-types'
import FieldLayout from './FieldLayout'

const FieldContainer = ({ field, onCellClick}) => {
	return <FieldLayout field={field} onCellClick={onCellClick}/>
}
FieldContainer.PropTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	onCellClick: PropTypes.func.isRequired
}
export default FieldContainer
