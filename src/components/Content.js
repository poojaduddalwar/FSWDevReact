
import {useState} from 'react'

const Content = () => {
    const [items,setItems] = useState([])
    const [value,setValue] = useState('')

    const handleSubmit = () =>{
        // let arr = items
        // arr.push(value)
        // console.log(arr)
        // setItems(arr)
        // OR
        setItems(prev => [...prev,value])
        setValue('')
    }

    const handleInput = (e) => {
        setValue(e.target.value)
        // console.log('value change')
    }

    const handleDelete = (item)=>{
        console.log(item)
        setItems(prev => prev.filter(i => i !== item))
    }

    // console.log(value)
    return (  
        <>
            <h2>Todo</h2>
                <input value={value} onChange={handleInput} type="text" />
                <button onClick={handleSubmit} type="submit">Add</button>
            <ul>
                {items.map(item => <li>{item} <button onClick={()=>{handleDelete(item)}}>Delete</button></li>)}
            </ul>
        </>
    );
}

export default Content; 
