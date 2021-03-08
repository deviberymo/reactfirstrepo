import React from 'react';
const postdetail =(props) => {
    console.log(props)
    console.log(props.match.params.lecture)
    console.log((props.location.search).split('=')[1])
    return(
        <div className="panel panel-info">

          <div className="panel panel-heading">
            <h2> {props.match.params.lecture} </h2>
            </div>
             <div className="panel-body">
                 <h1> {props.match.params.lecture}</h1>
                 <p> {props.match.params.lecture} A2A. Dummy Articleship is basically when you get registered under a CA for the mandatory training period of 3 years under the CA course but you don't actually go to the office for training. Two things:

                It is contravention of the guidelines. Basically what you're doing can also be termed as fraud!
                It is highly NOT recommended if you actually want to gain the knowledge.
                 Students generally take dummy for a couple of reasons.. Most of them in case they clear group one.. to have the articles period started as we as to have a sufficient study time. Secondly, if they are pursuing CA just for the sake of having a degree.

                Further, if you're anyways doing it, a CA would generally charge you for taking you as a dummy trainee under him/her, the range for which varies from City to City. Smaller the place, lesser the amount. Say monthly 500 to 2500 or a lump sum 15k to 40k.

                Hope this helps! :) </p>
                <p> You're on page num  {(props.location.search).split('=')[1]} </p>

            </div>
        </div>
    )
}

export default postdetail;