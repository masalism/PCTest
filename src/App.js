import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsPage from './components/DetailsPage';
import ListPage from './components/ListPage';
import NewRecordForm from './components/NewRecordForm';
import Navigation from './components/Navigation/Navigation';

import './App.css';
// import { posts } from './Posts';



class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         posts: []
    //     }
    // }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(posts => this.setState({ posts: posts }));
    // }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navigation />
                    <Switch>
                        <Route path='/' component={ListPage} exaxt/>
                        <Route path='/detailsPage' component={DetailsPage} />
                        <Route path='/newRecordForm' component={NewRecordForm}/>
                    </Switch>
                </div>    
            </BrowserRouter>
        )
        // if (this.state.posts.lenght === 0) {
        //     return <h1 className='text-danger'>Loading</h1>
        // } else {
        //     return (
        //         <div>
        //             <BrowserRouter>
                        
        //             </BrowserRouter>
        //             <h1 className='text-center text-warning display-2 p-4'>PCTest</h1>
        //             <div className="container-fluid">
        //                 <div className='row bg-warning text-dark p-1 text-center lead h1 align-items-center'>
        //                     <div className='col-1'>Post Number</div>
        //                     <div className='col-1'>User</div>
        //                     <div className='col-5'>Title</div>
        //                     <div className='col-5'>Body</div>
        //                 </div>
        //                 <PostList posts={this.state.posts} />
        //             </div>
        //         </div>
        //     );
        // }  
    }
}

export default App;