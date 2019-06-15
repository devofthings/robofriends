import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', height:'50em', width:'80%', marginLeft: '10%'}}>
            {props.children}
        </div>
        
    );
}

export default Scroll;