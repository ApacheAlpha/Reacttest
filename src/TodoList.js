import { Fragment, useState } from "react";
import "./style.css"
import TodoItem from "./TodoItem"


function Todolist() {
	const [inputValue, setInputValue] = useState('')
	const [list, setList] = useState([])

	const handinputchang = (inputdata) => {
		setInputValue(inputdata.target.value)
	}

	const handbuttonClick = () => {
		setList([...list, inputValue])
		setInputValue('')
	}

	const handldeleteItem = (index) => {
		const copyList = [...list]
		copyList.splice(index, 1)
		setList(copyList)
	}

	return (
		<Fragment>
			<div>
				<label htmlFor="insertArea">这是一个输入框</label>
				{/*这是一个注释的写法：这是一个input框 */}
				<input
					id="insertArea"
					className='input'
					value={inputValue}
					onChange={(data) => handinputchang(data)}>
				</input>
				<button onClick={handbuttonClick}>提交</button >
			</div>
			<ul>
				{
					list.map((value, index) => {
						return TodoItem(value, index, handldeleteItem)
						// return <TodoItem content={value} index={index} handldeleteItem={() => {
						// 	handldeleteItem()
						// }}>
					})
				}
			</ul>
		</Fragment>
	);
}


export default Todolist;
