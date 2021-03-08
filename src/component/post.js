import React from 'react';
import {Link} from 'react-router-dom';
const post =() => {
    return(
        <div className="panel panel-danger">

          <div className="panel panel-heading">
            <h2>post</h2>
            </div>
             <div className="panel-body">
                 <h1> post page</h1>
                 <p>A2A. Dummy Articleship is basically when you get registered under a CA for the mandatory training period of 3 years under the CA course but you don't actually go to the office for training. Two things:

                It is contravention of the guidelines. Basically what you're doing can also be termed as fraud!
                It is highly NOT recommended if you actually want to gain the knowledge.
                 Students generally take dummy for a couple of reasons.. Most of them in case they clear group one.. to have the articles period started as we as to have a sufficient study time. Secondly, if they are pursuing CA just for the sake of having a degree.

                Further, if you're anyways doing it, a CA would generally charge you for taking you as a dummy trainee under him/her, the range for which varies from City to City. Smaller the place, lesser the amount. Say monthly 500 to 2500 or a lump sum 15k to 40k.

                Hope this helps! :) </p>
                <h3>JavaScript</h3>
                <Link to="/post/JavaScript?page=101">details</Link>
                <h3>ReactNative</h3>
                <Link to="/post/ReactNative?page=102">details</Link>
                <h3>javatpoint</h3>
                <Link to="/post/javatpoint?page=103">details</Link>

                <p> <center>{ 'you are on page num 100' } </center>
                </p>
            </div>

        </div>

    )
}

export default post;