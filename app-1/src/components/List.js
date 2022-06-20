import React from 'react'
import Todo from './Todo'

function List(todos) {
    return (
        <div>
            {todos.list.map((item, index) => {
                return <Todo item={item} key={index}/>
            })}            
        </div>
    )
}

export default List