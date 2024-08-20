import React from 'react';

interface NavBarProps {
    
    buttonNames: string;
    
}

const NavBar = ({buttonNames}: NavBarProps) => {

    return (
        <div>
            <button>{buttonNames}</button>
        </div>
    );
};


export default NavBar;