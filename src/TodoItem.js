import ProTypes from 'prop-types'


function TodoItem(content, index, handldeleteItem) {
	const handclick = () => {
		handldeleteItem(index)
	}
	return (
		<div onClick={() => { handclick() }}>{content}</div>
	)
}

// function TodoItem({ content, index, handldeleteItem }) {
// 	// const TodoItem = ({ value, index, handldeleteItem }) => {
// 	const handclick = () => {
// 		handldeleteItem(index)
// 	}
// 	return (
// 		<div onClick={(index) => { handldeleteItem(index) }}>{content}</div>
// 	)
// }

TodoItem.ProTypes = {
	// content: ProTypes.string,
	content: ProTypes.number,
	handldeleteItem: ProTypes.func,
	index: ProTypes.number
}
export default TodoItem;
