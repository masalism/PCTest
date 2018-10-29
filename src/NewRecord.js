import React from 'react';

const NewRecord = ({onRouteChange}) => {
    return (
        <form>
            <div className="form-group">
                <label for="exampleFormControlInput1"></label>
                <input type="text" className="form-control" placeholder="title"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className='text-center'>
                <button onClick={onRouteChange} className='btn btn-success'>Post</button>
            </div>
        </form>
    )
}

export default NewRecord; 