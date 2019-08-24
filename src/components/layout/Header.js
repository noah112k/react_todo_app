import React from 'react';

function Header() {
    return (
        <header style = {headerStyle}>
            <h1>TodoList</h1>
        </header>
    )
}

const headerStyle = {
    background: '#87CEEB',
    color: '#fff',
    textAlign: 'center',
    padding: '20px'
}

export default Header;