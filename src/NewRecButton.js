import React from 'react';

const NewRecButton = ({ onRouteChange }) => {
    return (
        <div className='text-center'>
            <button onClick={() => onRouteChange('newRecord')} className='btn btn-danger mb-3'>New Post</button>
        </div>
    )
}

export default NewRecButton;

