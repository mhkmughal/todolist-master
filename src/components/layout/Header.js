import React from 'react';

const Header = () => {
    return (
            <div>
                <header style={headerStyle}>
                    <h1>TodoList</h1>
                    <p>Home | About </p>
                </header>
            </div>
)};

const headerStyle = {
    background: "#333",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

export default Header;