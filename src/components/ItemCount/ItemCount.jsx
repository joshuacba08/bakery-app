import React, {useState} from 'react'

const ItemCount = ({item, onAdd}) => {
    const [count, setCount] = useState(1)

    const addCount = (num) =>{
     setCount(count + num)
    }


    return (
    <div className="count-container">
        <button
            onClick={()=>{ addCount(-1) }}
            disabled={ count=== 1 ? true:false }
        >-</button>
        <div>{count}</div>
        <button
            onClick={()=>{ addCount(1) }}
            disabled={ count=== item.stock ? true:false }
        >+</button>
        <button onClick={()=>{onAdd(item,count)}}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount