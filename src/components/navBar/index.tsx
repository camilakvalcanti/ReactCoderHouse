import React from 'react';


interface NavBarProps {
    
    buttonNames?: string;
    url?: string;    
}

const NavBar = ({buttonNames,url}: NavBarProps) => {


    return (
        <div>
            <button>{buttonNames}</button>
            <img
            className='image'
            src={url}
            />
        </div>
    );
};


export default NavBar;