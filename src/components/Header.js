import React from 'react'
import Button from './Button'

const Header = ({showAdd, onAdd}) => {
    return (
        <header className='header'>
            <h1>To Do List</h1>
            <Button color= {showAdd?'grey':''} text ={showAdd?'Hide':'Add'} onAdd={onAdd}/>
        </header>
    )
}

export default Header
