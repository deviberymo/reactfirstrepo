import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import home from './home';
import post from './post';
import profile from './profile';
import Header from './Header';
import postdetail from './postdetail';

const Routing=() =>{
    return(
    <BrowserRouter>
        <Header/>
         <Route exact path ="/" component= {home}/>
         <Route exact path ="/post" component= {post}/>
         <Route path ="/post/:lecture" component= {postdetail}/>
         <Route path ="/profile" component= {profile}/>
    </BrowserRouter>
    )
}
export default Routing;