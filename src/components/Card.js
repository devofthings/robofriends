import React from 'react';

const Card = ({ name, email, id} ) => {
    return(
        <div className='tc grow bg-navy pa3 ma2 dib bw2 shadow-5'>
            <img src={`https://robohash.org/set_set3/${id}?size=200x200`} alt='robot'/>
            <div className='washed-blue code'> 
                <h2 className='f4'>{name}</h2>
                <p className='f6'>{email}</p>
            </div>
        </div>
    );
}

export default Card;