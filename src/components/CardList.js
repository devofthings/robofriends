import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return(
        <div className='flex flex-column'>
            {
                robots.map((robot, i) => { 
                    /*
                    The first is the object itself(robot) and the second is the index(i) of the object in the array. 
                    The second argument is optional. 
                    If you want to use use the index, it's going to be the second argument 
                    so you need at the very least a placeholder for the first one.
                    */
                    return (
                        <Card
                            id={robot.id} 
                            name={robot.name} 
                            email={robot.email} 
                            key={i}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;