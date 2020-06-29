import React from 'react';
import './header.css';
import HeaderTop from './headerTop';
import HeaderCenter from './headerCenter';
import HeaderBottom from './headerBottom';


function MainHeader(){
    return (
        <div className="MainHeader">
            <HeaderTop />
            <HeaderCenter />
            <HeaderBottom />
        </div>
    );

}

export default MainHeader;


